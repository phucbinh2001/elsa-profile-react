import axiosClient from "./axiosClient";

const userApi = {
  getAll(params) {
    const url = "/categories";
    return axiosClient.get(url, { params });
  },

  login(data) {
    // const url = "https://vn-stag.elsaspeak.com/api/auth/login";
    const url = "https://api.ezfrontend.com/auth/local";
    return axiosClient.post(url, data);
  },
};

export default userApi;
