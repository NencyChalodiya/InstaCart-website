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

// export const RegisterUser = (payload) => {
//   return Ajax.Request(`/register/`, Ajax.POST, false, payload);
// };

export const RegisterUser = (payload) => {
  return Ajax.Request(`/register`, Ajax.POST, false, payload);
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
  return Ajax.Request("/change-password/", Ajax.POST, false, payload);
};

export const GetUserDetails = () => {
  return Ajax.Request("/user-detail/", Ajax.GET, true);
};

export const UpdateUserDetails = (payload) => {
  return Ajax.Request("/change-details/", Ajax.PUT, true, payload);
};

export const CreateNewPassword = (payload) => {
  return Ajax.Request("/change_password/", Ajax.POST, true, payload);
};

export const ShopListCategory = () => {
  return Ajax.Request(`/shop/list-category/`, Ajax.GET, true);
};

export const getShopsByCategory = (payload) => {
  return Ajax.Request(`/shop/list-shop/`, Ajax.POST, true, payload);
};

export const getProductsBasedShops = (id) => {
  return Ajax.Request(`/product/ListProduct/?id=${id}`, Ajax.GET, true);
};

export const getSubCategoryList = () => {
  return Ajax.Request(`/product/List-Subcat/`, Ajax.GET, true);
};

export const getProductsOfSubCategory = (id) => {
  return Ajax.Request(`/product/subcategory/${id}/`, Ajax.GET, true);
};

export const RegisterAddress = (payload) => {
  return Ajax.Request(`/register-address/`, Ajax.POST, true, payload);
};

export const getUserAddress = () => {
  return Ajax.Request(`/address/`, Ajax.GET, true);
};

export const editUserAddress = (payload) => {
  return Ajax.Request(`/edit-address/`, Ajax.POST, true, payload);
};

let API = {
  RegisterUser,
  LoginUser,
  refreshToken,
  ResetPasswordUser,
  ForgotPasswordUser,
  GetUserDetails,
  UpdateUserDetails,
  CreateNewPassword,
  ShopListCategory,
  getShopsByCategory,
  getProductsBasedShops,
  getSubCategoryList,
  getProductsOfSubCategory,
  RegisterAddress,
  getUserAddress,
  editUserAddress,
};

export default API;
