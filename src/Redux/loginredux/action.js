import axios from "axios";
import emailjs from '@emailjs/browser';
import random from "random";

export const Logoutfun = () => {
  return (dispatch) => {
    const idval = JSON.parse(localStorage.getItem("userdetails"));
    console.log('logout', idval);
    // let cookies = ;
    // console.log('cookies', cookies);
    let config = {
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/auth/logout`,
      headers: {
        'Cookie': 'connect.sid=<SESSION_COOKIE_VALUE>'
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    localStorage.clear();
    dispatch({
      type: "login_now",
      payload: {
        Auth: false,
        error: false,
        user: {},
      },
    });
  };
};
export const updateUserDetails = async () => {
  return new Promise((resolve, reject) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      axios.get(`${process.env.REACT_APP_BASE_URL}/user/get-details`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        console.log("get user res: ", res);
        let element = res.data;
        console.log("updated user", element.phone);
        localStorage.setItem("userdetails", JSON.stringify(element));
        localStorage.setItem("login", true);
        resolve();
      });
    } catch (error) {
      console.log("error: ", error);
      reject();
    }
  });
};
export const planforsubs = () => {
  return new Promise((resolve, reject) => {
    const plan = JSON.parse(localStorage.getItem("subscription"));
    const idval = JSON.parse(localStorage.getItem("userdetails"));
    const token = JSON.parse(localStorage.getItem("token"));

    let data = JSON.stringify({
      package: plan,
    });
    let config = {
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/user/update-plan`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: data
    };
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        resolve();
      })
      .catch((error) => {
        console.log(error);
      });

  })
};

const getPlanType = (user) => {
  return user.package.devices;
}
export const getAuth = async ({ input, token }) => {
  return new Promise((resolve, reject) => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/user/get-details`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log("get user res: ", res);
      let element = res.data;
      const numOfDevices = getPlanType(element);
      console.log("numOfDevices: ", numOfDevices);
      getSessionsCount().then((session) => {
        if (session.length <= numOfDevices) {
          console.log("user logged in", element.phone);
          localStorage.setItem("userdetails", JSON.stringify(element));
          localStorage.setItem("login", true);
          resolve();
        } else {
          reject();
        }
      })
    });
  });
};

const registerUser = async (inputNumber) => {
  return new Promise((resolve, reject) => {
    let body = {
      phone: inputNumber,
      name: "User",
      package: {
        plan: "base",
        price: "free",
        devices: 1,
      },
      parentalLock: "false",
    };
    let data = JSON.stringify(body);
    console.log(data);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/users`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("userdetails", JSON.stringify(response.data));
        localStorage.setItem("login", true);
        console.log("user registered");
        setDeviceCount(response.data.phone);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export const loginUser = async ({ phone, email }) => {
  try {
    let data = JSON.stringify({
      phone: phone,
      name: "User",
      package: {
        plan: "base",
        price: "free",
        devices: 1,
      },
      parentalLock: "false",
    });
    let config = {
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/auth/login`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    let res = (await axios.request(config)).data;
    console.log("login res: ", res);
    if (res?.otp) {
      await sendOtp(res.otp, email);
    }
    return res;
  } catch (error) {
    console.log("error: ", error);
  }
};
async function sendOtp(otp, email) {
  try {
    emailjs.init("Y07oJh0x39JoDj-KE");
    let res = await emailjs.send("service_6n0ciaq", "template_eak77ok", { from_name: 'Hotstar', to_email: email, the_otp: otp, reply_to: email })
    console.log('SUCCESS!', res.status, res.text);
  } catch (err) {
    console.log('FAILED...', err);
    return null;
  }
}
export const checkLogin = () => {
  return (dispatch) => {
    const loginstatus = JSON.parse(localStorage.getItem("login"));
    const loginuser = JSON.parse(localStorage.getItem("userdetails"));
    console.log("status", loginstatus);
    if (loginstatus === true) {
      dispatch({
        type: "login_now",
        payload: {
          Auth: true,
          error: false,
          user: loginuser,
          updated: Math.random()
        },
      });
    }
  };
};

export const upDateDevice = async (phone, value) => {
  let user = await getSessionsCount(phone);
  let data = JSON.stringify({
    "count": user.count + value
  });


  let config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_BASE_URL}/devices/${user.id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

}

export const getSessionsCount = async () => {
  return new Promise((resolve, reject) => {
    let config = {
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/auth/sessions`,
      headers: {
        'Content-Type': 'application/json'
      },
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        let sessions = response.data;
        console.log("sessions: ", sessions);
        resolve(sessions);
        // if (devices && devices.length > 0) {
        //   resolve(devices[0])
        // } else {
        //   // setDeviceCount(phone);
        //   // resolve(1);
        // } 
      })
      .catch((error) => {
        console.log(error);
      });
  })
}
export const setDeviceCount = async (phone) => {
  return new Promise((resolve, reject) => {
    let data = JSON.stringify({
      "phone": phone,
      "count": 1
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/devices`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  })
}