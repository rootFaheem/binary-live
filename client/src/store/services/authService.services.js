import axios from "axios";

export const authCheckService = () => {
  return axios
    .get("/api/authcheck")
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    });
};

export const loginUserService = request => {
  return axios
    .post("/api/auth/login", request.user)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

export const logOutUserService = () => {
  return axios
    .post("/api/auth/logout")
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};