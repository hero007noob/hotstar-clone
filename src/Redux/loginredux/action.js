import axios from "axios";

export const getAuth = async ({ input }) => {
    return new Promise((resolve, reject) => {

        axios.get("http://localhost:4000/users").then((res) => {
            let exist = false;
            res.data.forEach((element) => {
                if (element.phone === input) {
                    exist = true;
                    localStorage.setItem("userdetails", JSON.stringify(element));
                    localStorage.setItem("login", true);
                    console.log("user logged in");
                    resolve();
                }
            });
            if (!exist) {
                registeruser(input).then(() => {
                    resolve();
                });
            }
        });
    })
};



const registeruser = async (inputNumber) => {
    return new Promise((resolve, reject) => {
        let body = {
            phone: inputNumber,
            name: "User",
            package: "base",
            parentalLock: "false",
        };
        let data = JSON.stringify(body);
        console.log(data);
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://localhost:4000/users",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios
            .request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                localStorage.setItem("userdetails", data);
                localStorage.setItem("login", true);
                console.log("user registered");
                resolve();
            })
            .catch((error) => {
                console.log(error);
            });
    })
};


export const checkLogin = () => {
    return (dispatch) => {
        const loginstatus = JSON.parse(localStorage.getItem("login"));
        const loginuser = JSON.parse(localStorage.getItem("userdetails"));
        console.log("status", loginstatus)
        if (loginstatus === true) {
            dispatch({
                type: "login_now",
                payload: {
                    Auth: true,
                    error: false,
                    user: loginuser,

                },

            })
        }

    }

}







