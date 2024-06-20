import axios from "axios";

export let API = axios.create();

API.interceptors.request.use(function (config) {
          // Do something before request is sent
          console.log("interceptor request")
          let token = sessionStorage.getItem("token");
          config.headers["x-auth-key"] = 'test' + token;

          return config;
}, function (error) {
          // Do something with request error
          return Promise.reject(error);
});

// Add a response interceptor
API.interceptors.response.use(function (response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          console.log("interceptors response")

          return response;
}, function (error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          return Promise.reject(error);
});