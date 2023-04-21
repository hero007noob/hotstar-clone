import axios from "axios";

const GET_PARENT_CONTROLS = "GET_PARENT_CONTROLS";
const setParentControls = ({ value }) => {
  console.log("val", value);
  return (dispatch) => {
    return dispatch(parentData({ loading: false, isLocked: value }));
  };
};

const getParentControls = async () => {
  return new Promise((resolve, reject) => {
    const token = JSON.parse(localStorage.getItem("token"));
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/user/get-details`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log("lock status res", JSON.stringify(response.data));
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
export const updateParentControls = async (status) => {
  return new Promise((resolve, reject) => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log('parental lock status: ' + status);
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: status ? `${process.env.REACT_APP_BASE_URL}/user/enable-parental-lock` : `${process.env.REACT_APP_BASE_URL}/user/disable-parental-lock`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        resolve();
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
const parentData = (data) => {
  return {
    type: GET_PARENT_CONTROLS,
    payload: data,
  };
};
export {
  setParentControls,
  parentData,
  GET_PARENT_CONTROLS,
  getParentControls,
};
