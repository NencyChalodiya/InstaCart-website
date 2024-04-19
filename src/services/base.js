import API from "../services/api";

export const BASE_API = `${process.env.REACT_APP_API_URL}`;
// export const BASE_API = `http://192.168.1.5:8080/api/v8`;

const POST = "post";
const GET = "get";
const PUT = "put";
const PATCH = "patch";
const DELETE = "delete";

const INVALID_TOKEN = "invalid or expired jwt";
// const HEALTH_SECRET = "SfUyfAztruqg92sbm30rEIyHLNV7f5";

const getToken = () => {
  const token = localStorage.getItem("token");
  if (token !== null) {
    // token previously stored
    return token;
  }
  return "";
};

const refreshToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    throw new Error("No refresh token available.");
  }
  const payload = {
    refresh_token: localStorage.getItem("refreshToken"),
  };

  const response = API.refreshToken(payload);
  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to refresh token.");
  }

  const data = await response.json();
  localStorage.setItem("token", data.accessToken);
};

const handleResponse = async (response) => {
  //console.log(response);
  if (!response.ok) {
    handleTokenError(response);
    return Promise.reject(response);
  }
  const contentType = response.headers.get("Content-Type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    const data = await response.json();
    //console.log(data);
    return data;
  } else {
    return response.text();
  }
};

const Request = async (
  route,
  method,
  priv = true,
  payload,
  imageType = "",
  API_URL = ""
) => {
  let config = {
    method: method,
    headers: {},
  };
  if (["post", "put", "patch"].includes(method)) {
    config = {
      ...config,
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    };
  }
  if (priv) {
    let token = getToken();
    config.headers = {
      ...config.headers,
      Token: `${token}`,
      // health_secret: HEALTH_SECRET,
    };
  }
  let api_temp = BASE_API;
  // if (API_URL && API_URL !== "") {
  // 	api_temp = API_URL;
  // }
  return fetch(`${api_temp}${route}`, config)
    .then(async (res) => {
      const data = await handleResponse(res);
      return data;
    })
    .catch((err) => {
      throw handleTokenError(err);
    });
};

const handleTokenError = (err) => {
  if (
    err?.status == 401 ||
    err?.message == INVALID_TOKEN ||
    err?.statusText == INVALID_TOKEN
  ) {
    console.log(err);
    refreshToken();
  }
  return err;
};

const HandleError = (error, msg) => {
  console.log("error", error);
  let errMsg = "";
  if (error) {
    switch (error.status) {
      case 400:
        errMsg = msg.INVALID_DATA_ERROR;
        break;
      case 401:
        errMsg = msg.UNAUTHORISED;
        break;
      case 403:
        errMsg = msg.FORBIDDEN_ERROR;
        break;
      case 404:
        errMsg = msg.NOT_FOUND;
        break;
      case 409:
        errMsg = msg.CONFLICT;
        break;
      case 413:
        errMsg = msg.PAYLOAD_TOO_LARGE;
        break;
      case 500:
        errMsg = msg.SERVER_ERROR;
        break;
      default:
        errMsg = msg.DEFAULT_ERROR;
    }
  }
  console.log("errMsg", error);
  return errMsg;
};

let base = {
  BASE_API,
  POST,
  GET,
  PUT,
  PATCH,
  DELETE,
  Request,
  HandleError,
};

export default base;
