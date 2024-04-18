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
  return Ajax.Request(`/register`, Ajax.POST, false, payload);
};

let API = {
  RegisterUser,
};

export default API;
