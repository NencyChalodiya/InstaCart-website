import Ajax from "./base";

// export const GetCaloriesAdherence = (payload) => {
//   // return Ajax.Request(`/patient_hc/calories_adherence`, Ajax.POST, true, payload);
//   return Ajax.Request(
//     `/diet/calories_adherence_patient`,
//     Ajax.POST,
//     true,
//     payload
//   );
// };

export const RegisterUser = (payload) => {
  return Ajax.Request(`/register/`, Ajax.POST, false, payload);
};

export const LoginUser = (payload) => {
  return Ajax.Request(`/login/`, Ajax.POST, false, payload);
};

export const refreshToken = (payload) => {
  return Ajax.Request("/refresh-token/", Ajax.POST, true, payload);
};

let API = {
  RegisterUser,
  LoginUser,
  refreshToken,
};

export default API;
