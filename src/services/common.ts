import {
  uploadAPI,
  moonAPI
} from "utils/request";

const uploadFile = async (config, url = "/uploadFile") => {
  return await uploadAPI.post(url, config, {
    headers: { "Content-Type": "multipart/form-data", },
  });
};

const getCodeImg = async (config) => moonAPI.get('/captcha', config);

const login = async (config) => moonAPI.post('/system/login', config);

export default {
  uploadFile,
  getCodeImg,
  login,
};
