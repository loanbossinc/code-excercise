import axios from "axios";

/**
 *
 * @param {String} path API path to call. Base set by env variable.
 * @param {String} method HTTP verb for the request
 * @param {Object} body Body to pass
 * @param {*} headers
 */

export const getApiUrl = async (item = "apiV1Url") => {
  try {
    const url = sessionStorage.getItem(item);
    if (url && url !== "undefined") {
      return url;
    }

    const config = await fetch("/config.json");
    const data = config.json();
    sessionStorage.setItem(item, data[item]);

    return data[item];
  } catch (error) {
    console.log(`Error Reading config ${error}`);
  }
};

export const apiRequest = async (path, method = "GET", body = null, headers = {}, withCredentials = false) => {
  const params = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers
    },
    withCredentials
  };

  const apiUrl = await getApiUrl();
  params.url = `${apiUrl}/api${path}`;

  if (body) {
    if (method === "GET") throw new Error("GET requests can not have a body.");
    params.data = body;
  }

  const response = await axios(params);
  return response.data;
};

export const authorizedRequest = async (path, method = "GET", body = null, headers = null) => {
  const token = sessionStorage.getItem("pfToken");
  const Authorization = `Bearer ${token}`;

  const data = apiRequest(path, method, body, {
    ...headers,
    Authorization
  });

  return data;
};
