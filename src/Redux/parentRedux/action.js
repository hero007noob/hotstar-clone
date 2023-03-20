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
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/parentalLock`,
      headers: {},
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
    let data = JSON.stringify({
      status: status,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_BASE_URL}/parentalLock`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
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
