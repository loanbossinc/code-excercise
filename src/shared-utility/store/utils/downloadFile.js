import axios from "axios";

/**
 *
 * @param {String} path API path to call. Base set by env variable.
 * @param {String} method HTTP verb for the request
 * @param {Object} body Body to pass
 * @param {*} headers
 */

export const getEnvConfig = async (item = "apiV1Url") => {
  const url = sessionStorage.getItem(item);
  if (url) return url;

  try {
    const response = await fetch("/config.json");
    const data = await response.json();
    sessionStorage.setItem(item, data[item]);
    return data[item];
  } catch (error) {
    console.log(`Error Reading config ${error}`);
  }
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
