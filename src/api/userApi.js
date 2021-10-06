import axiosClient from "./axiosClient";

const userApi = {
  getAll(params) {
    const url = "/categories";
    return axiosClient.get(url, { params });
  },

  add(data) {
    const url = "https://vn.elsaspeak.com/api/auth/login";
    return axiosClient.post(url, data);
  },
};

export default userApi;
