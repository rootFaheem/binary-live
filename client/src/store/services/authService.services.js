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
  console.log("API HIT::", request.data);
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
  console.log("request in authcheck::", request.data);
  return axios
    .post("/graphql", request.data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log("response iiiiiiiiiiiiiiiiiiiii: ", response);
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
