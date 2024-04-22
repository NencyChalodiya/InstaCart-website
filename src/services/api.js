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

export const ResetPasswordUser = (payload) => {
  return Ajax.Request("/forgot_password/", Ajax.POST, false, payload);
};

export const ForgotPasswordUser = (payload) => {
  return Ajax.Request("/change_password/", Ajax.POST, false, payload);
};

export const GetUserDetails = () => {
  return Ajax.Request("/user-detail/", Ajax.GET, false);
};

export const UpdateUserDetails = (payload) => {
  return Ajax.Request("/change-details/", Ajax.PATCH, true, payload);
};

let API = {
  RegisterUser,
  LoginUser,
  refreshToken,
  ResetPasswordUser,
  ForgotPasswordUser,
  GetUserDetails,
  UpdateUserDetails,
};

export default API;
