import axios from "axios";

export const Logoutfun = () => {
  return (dispatch) => {
    const idval = JSON.parse(localStorage.getItem("userdetails"));
    console.log('logout', idval);
    upDateDevice(idval.phone, -1);
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

export const planforsubs = () => {
  return new Promise((resolve, reject) => {
    const plan = JSON.parse(localStorage.getItem("subscription"));
    const idval = JSON.parse(localStorage.getItem("userdetails"));

    const id = idval.id;

    let data = JSON.stringify({
      package: plan,
    });

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/users/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("userdetails", JSON.stringify(response.data))
        resolve();
      })
      .catch((error) => {
        console.log(error);
      });
  })
};
const getPlanType = (user) => {
  switch (user.package.plan) {
    case "base":
      return 1;
    case "SUPER":
      return 2;
    case "PREMIUM":
      return 4;
    default:
      return 1;
  }
}
export const getAuth = async ({ input }) => {
  return new Promise((resolve, reject) => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/users`).then((res) => {
      let exist = false;
      res.data.forEach((element) => {
        if (element.phone === input) {
          exist = true;
          const numOfDevices = getPlanType(element);
          getDeviceCount(element.phone).then((user) => {
            if (user.count < numOfDevices) {
              console.log("user logged in", element.phone);
              localStorage.setItem("userdetails", JSON.stringify(element));
              localStorage.setItem("login", true);
              upDateDevice(element.phone, 1);
              resolve();
            } else {
              reject();
            }
          })

        }
      });
      if (!exist) {
        registeruser(input).then((user) => {
          resolve();
        });
      }
    });
  });
};

const registeruser = async (inputNumber) => {
  return new Promise((resolve, reject) => {
    let body = {
      phone: inputNumber,
      name: "User",
      package: {
        plan: "base",
        price: "free"
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
  let user = await getDeviceCount(phone);
  let data = JSON.stringify({
    "count": user.count + value
  });


  let config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: `http://localhost:4000/devices/${user.id}`,
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

export const getDeviceCount = async (phone) => {
  return new Promise((resolve, reject) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/devices?phone=${phone}`,
      headers: {
        'Content-Type': 'application/json'
      },
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        let devices = response.data;
        if (devices && devices.length > 0) {
          resolve(devices[0])
        } else {
          // setDeviceCount(phone);
          // resolve(1);
        }
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