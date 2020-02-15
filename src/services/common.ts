import { uploadAPI } from "utils/request";

const uploadFile = async (config, url = "/uploadFile") => {
  return await uploadAPI.post(url, config, {
    headers: { "Content-Type": "multipart/form-data", },
  });
};

export default {
  uploadFile,
};
