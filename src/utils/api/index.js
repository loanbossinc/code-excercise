import axios from "axios";
import { ToastError } from "components/Global/Toasts/Toasty";

const isDevelopment = process.env.NODE_ENV === "development";

/**
 *
 * @param {String} path API path to call. Base set by env variable.
 * @param {String} method HTTP verb for the request
 * @param {Object} body Body to pass
 * @param {*} headers
 */

const getEnvConfig = (item = "apiV1Url") => {
  const url = sessionStorage.getItem(item);
  if (url && url !== "undefined") {
    return url;
  }

  return fetch("/config.json")
    .then(response => response.json())
    .then(data => {
      sessionStorage.setItem(item, data[item]);
      return data[item];
    })
    .catch(err => {
      console.log(`Error Reading config ${err}`);
    });
};


const apiRequest = async (path, method = "GET", body = null, headers = {}, withCredentials = false) => {
  const params = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers
    },
    withCredentials
  };

  const envConfigUrl = await getEnvConfig();
  params.url = `${envConfigUrl}/api${path}`;

  if (body) {
    if (method === "GET") {
      throw new Error("GET requests can not have a body.");
    }
    params.data = body;
  }
  const response = await axios(params);
  return response.data;
};

export const uploadFile = async (payload, method = "POST") => {
  const { type, name, size } = payload.file;
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

  throw Error("File exceeds size limit");
};

export const downloadFile = async (url, method = "GET", payload) => {
  const token = sessionStorage.getItem("pfToken");
  const Authorization = `Bearer ${token}`;
  const envConfigUrl = await getEnvConfig();
  const params = {
    url: `${envConfigUrl}/api/${url}`,
    method,
    responseType: "blob",
    headers: {
      Authorization
    },
    data: payload
  };
  const {
    data,
    headers: { "content-type": type, "content-filename": filename }
  } = await axios(params);

  if (navigator.appVersion.toString().indexOf(".NET") > 0) {
    window.navigator.msSaveBlob(new Blob([data], { type }), filename);
  } else {
    const url = window.URL.createObjectURL(new Blob([data], { type }));
    const link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
  }
};

export const downloadFileAsArrayBuffer = async url => {
  const token = sessionStorage.getItem("pfToken");
  const baseApiUrl = await getEnvConfig();
  const result = await axios({
    url: `${baseApiUrl}/api/${url}`,
    method: "GET",
    responseType: "blob",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const blob = result.data;
  const buffer = await blob.arrayBuffer();
  return buffer;
};

export const downloadLocalFile = async (
  url,
  httpMethod,
  payload,
  downloadName
) => {
  const token = sessionStorage.getItem("pfToken");
  const Authorization = `Bearer ${token}`;
  const params = {
    url: `${url}`,
    method: httpMethod,
    responseType: "blob",
    headers: {
      Authorization
    },
    data: payload
  };
  if (!isDevelopment) {
    params.url = `${process.env.REACT_APP_API_URL}${params.url}`;
  }
  const {
    data,
    headers: { "content-type": type, "content-filename": filename }
  } = await axios(params);

  if (navigator.appVersion.toString().indexOf(".NET") > 0) {
    window.navigator.msSaveBlob(new Blob([data], { type }), filename);
  } else {
    const url = window.URL.createObjectURL(new Blob([data], { type }));
    const link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    link.href = url;
    link.download = downloadName || filename;
    document.body.appendChild(link);
    link.click();
  }
};

export const downloadXLSFile = async (url, httpMethod, payload, downloadName) => {
  const token = sessionStorage.getItem("pfToken");
  const Authorization = `Bearer ${token}`;
  const envConfigUrl = await getEnvConfig();
  const params = {
    url: `${envConfigUrl}/api/${url}`,
    method: httpMethod,
    responseType: "blob",
    headers: {
      Authorization
    },
    data: payload
  };

  let results = { status: 0 };
  try {
    results = await axios(params);
  } catch (error) {
    ToastError("Export Failed");
  }

  if (results.status === 204) {
    ToastError("You have submitted no quotes to this deal.");
    return;
  }
  if (results.status === 200) {
    const {
      data,
      headers: { "content-type": type, "content-filename": filename }
    } = results;
    if (navigator.appVersion.toString().indexOf(".NET") > 0) {
      window.navigator.msSaveBlob(new Blob([data], { type }), filename);
    } else {
      const url = window.URL.createObjectURL(new Blob([data], { type }));
      const link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
      link.href = url;
      link.download = downloadName || filename;
      document.body.appendChild(link);
      link.click();
    }
  }
};

export default apiRequest;
