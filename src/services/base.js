import API from "../services/api";

export const BASE_API = `${process.env.REACT_APP_API_URL}`;

const POST = "post";
const GET = "get";
const PUT = "put";
const PATCH = "patch";
const DELETE = "delete";

const INVALID_TOKEN = "invalid or expired jwt";

const jsonToUrlParams = (json) => {
  return Object.keys(json)
    .map(function (k) {
      if (json[k]) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(json[k]);
      }
      return "";
    })
    .filter((item) => {
      return item;
    })
    .join("&");
};

const getToken = () => {
  const token = localStorage.getItem("accessToken");
  if (token !== null) {
    return token;
  }
  return "";
};

// const RefreshToken = async () => {
//   const refreshtoken = localStorage.getItem("refreshtoken");
//   if (!refreshtoken) {
//     throw new Error("No refresh token available.");
//   }
//   const payload = {
//     refreshToken: refreshtoken,
//   };
//   let config = {
//     method: POST,
//     body: JSON.stringify(payload),
//     headers: {
//       "content-type": "application/json",
//     },
//   };
//   console.log("refreshToken", refreshtoken);
//   const response = await fetch(`${BASE_API}/refreshAccessToken`, config);
//   //console.log(response);
//   if (!response.ok) {
//     throw new Error("Failed to refresh token.");
//   }
//   const data = await response.json();
//   //console.log("data", data);
//   if (
//     data.statusCode === 401 ||
//     data.statusCode === INVALID_TOKEN ||
//     data.status === INVALID_TOKEN
//   ) {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//     window.location.href("/");
//   } else {
//     const newAccessToken = data?.data?.accessToken;
//     console.log("newAccessToken", newAccessToken);
//     localStorage.setItem("accessToken", newAccessToken);
//     return newAccessToken;
//   }
// };

const handleResponse = async (response) => {
  //console.log(response);
  if (!response.ok) {
    handleTokenError(response);
    return Promise.reject(response);
  }
  const contentType = response.headers.get("Content-Type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    const data = await response.json();
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
  API_URL = "",
  params = {}
) => {
  if (Object.keys(params).length > 0) {
    route += `?${jsonToUrlParams(params)}`;
  }
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
  } else {
    config = {
      ...config,
      headers: {
        // Authorization: `${token}`,
      },
    };
  }
  if (priv) {
    let token = getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  let api_temp = BASE_API;
  // if (API_URL && API_URL !== "") {
  //   api_temp = API_URL;
  // }
  return fetch(`${api_temp}${route}`, config)
    .then(async (res) => {
      const data = await handleResponse(res);
      // console.log("data", data);

      // if (data.statusCode === 403 || data.msg === "Access token has expired") {
      //   console.log("sdiadhn");
      //   const refreshtoken = localStorage.getItem("refreshToken");
      //   const payload = {
      //     refreshToken: refreshtoken,
      //   };
      //   const response = await API.refreshToken(payload);
      //   localStorage.setItem("accessToken", response.data.accessToken);
      //   console.log("refresh token generated", response);
      // }

      return data;
    })
    .catch((err) => {
      throw handleTokenError(err);
    });
};

const handleTokenError = async (err) => {
  if (
    err?.status == 401 ||
    err?.message == INVALID_TOKEN ||
    err?.statusText == INVALID_TOKEN
  ) {
    console.log("errordsdewfewq", err);
    console.log("No refresh token generated");
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
