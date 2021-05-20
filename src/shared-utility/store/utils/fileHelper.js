import { apiRequest } from "./apiHelper";

import { ToastInfo, ToastError } from "components/Global/Toasts/Toasty";
export const uploadFile = async (payload, method = "POST") => {
  const { type, name, size } = payload.file;

  if (size > 100000000 && size < 10000000000) {
    ToastInfo("You are attaching a large file, please check back in a couple minutes");
  }

  if (size > 10000000000) {
    ToastError("File exceeds size limit");
  }
  
  if (size < 10000000000) {
    const token = sessionStorage.getItem("pfToken");
    const Authorization = `Bearer ${token}`;
    const headers = {
      "Content-Type": type,
      "Content-Disposition": `attachment; filename="${name}"`,
      Authorization
    };
    const formData = new FormData();
    formData.append("file", payload.file);
    formData.append("model", payload.model);
    formData.append("modelId", payload.modelId);
    const data = apiRequest(payload.url, method, formData, headers);
    return data;
  }

  throw {
    message: "File exceeds size limit"
  };
};
