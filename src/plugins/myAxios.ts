import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8101/api",
  timeout: 10000,
  headers: {},
});

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const data = response.data;
    console.log(response);
    if (data.code === 0) {
      return data.data;
    }
    console.error("request error", data);
    return response.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (
      error.code === "ECONNABORTED" &&
      error.message.indexOf("timeout") !== -1
    ) {
      console.error("请求超时，请稍后重试");
      // 这里可以根据实际情况进行处理，比如重新发起请求等
    } else {
      console.error("请求错误", error);
    }
    return Promise.reject(error);
  }
);

export default instance;
