import axios from "axios";

export const registerUserService = request => {
  return axios
    .post("/graphql", request.data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

export const loginUserService = request => {
  return axios
    .post("/graphql", request.data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

export const authCheckService = request => {
  return axios
    .post("/graphql", request.data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
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
