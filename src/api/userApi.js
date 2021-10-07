import axiosClient from "./axiosClient";

const userApi = {
  login(data) {
    const url = "https://vn.elsaspeak.com/api/auth/login";
    // const url = "https://api.ezfrontend.com/auth/local";
    return axiosClient.post(url, data);
  },
};

export default userApi;
