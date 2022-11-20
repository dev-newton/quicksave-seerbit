import axios from "axios";
const LocalURL = `${process.env.REACT_APP_API_ENDPOINT}`;
/* eslint-disable import/no-anonymous-default-export */

const { REACT_APP_PUBLIC_KEY, REACT_APP_SECRET_KEY } = process.env;

export default {
  url: LocalURL,
  headers() {
    const token = localStorage.getItem("token");

    let header = {};

    header["Content-type"] = "application/json";

    if (token && token !== undefined) {
      header["Authorization"] = `Bearer ${token}`;
    }
    return header;
  },

  authenticate() {
    return axios({
      method: "post",
      url: `${this.url}/encrypt/keys`,
      headers: this.headers(),
      data: JSON.stringify({
        key: `${REACT_APP_SECRET_KEY}.${REACT_APP_PUBLIC_KEY}`,
      }),
    });
  },
  initiatePayment(data) {
    return axios({
      method: "post",
      url: `${this.url}/payments`,
      headers: this.headers(),
      data,
    });
  },
};
