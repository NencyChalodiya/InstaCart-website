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

export const SendOtpToRegister = (payload) => {
  return Ajax.Request(`/register`, Ajax.POST, false, payload);
};

export const VerifyOtpToRegister = (payload) => {
  return Ajax.Request(`/register/verify`, Ajax.POST, false, payload);
};

export const LoginUser = (payload) => {
  return Ajax.Request(`/login`, Ajax.POST, false, payload);
};

export const VerifyOtpToLogin = (payload) => {
  return Ajax.Request(`/login/verify`, Ajax.POST, false, payload);
};

// export const LoginUser = (payload) => {
//   return Ajax.Request(`/login/`, Ajax.POST, false, payload);
// };

export const refreshToken = (payload) => {
  return Ajax.Request("/refreshAccessToken", Ajax.POST, true, payload);
};

export const resendOtp = (payload) => {
  return Ajax.Request(`/resendOtp`, Ajax.POST, false, payload);
};

export const resetPasswordUser = (payload) => {
  return Ajax.Request(`/resetpassword`, Ajax.POST, false, payload);
};

export const changePasswordUser = (resetToken, payload) => {
  return Ajax.Request(
    `/change-password/${resetToken}`,
    Ajax.POST,
    false,
    payload
  );
};

export const GetUserDetails = () => {
  return Ajax.Request("/userprofile/information", Ajax.GET, true);
};

export const changeName = (payload) => {
  return Ajax.Request("/userprofile/changename", Ajax.POST, true, payload);
};

export const changeEmail = (payload) => {
  return Ajax.Request(`/userprofile/changeemail`, Ajax.POST, true, payload);
};

export const changePasswordOfUser = (payload) => {
  return Ajax.Request(`/userprofile/changepassword`, Ajax.POST, true, payload);
};

export const changePhoneno = (payload) => {
  return Ajax.Request(
    `/userprofile/changephonenumber`,
    Ajax.POST,
    true,
    payload
  );
};

export const verifyChangedPhoneNumber = (payload) => {
  return Ajax.Request(
    `/userprofile/verifychangedphonenumber`,
    Ajax.POST,
    true,
    payload
  );
};

// export const CreateNewPassword = (payload) => {
//   return Ajax.Request("/change_password/", Ajax.POST, true, payload);
// };

// export const ShopListCategory = () => {
//   return Ajax.Request(`/shop/list-category/`, Ajax.GET, true);
// };

export const getCategoryFilter = () => {
  return Ajax.Request(`/store/categorylist`, Ajax.GET, true);
};

export const getShopsByCategory = (id) => {
  return Ajax.Request(`/store/category?main_category_id=${id}`, Ajax.GET, true);
};

// export const getProductsBasedShops = (id) => {
//   return Ajax.Request(`/product/ListProduct/?id=${id}`, Ajax.GET, true);
// };

export const getStoreFrontDetails = (storeId) => {
  return Ajax.Request(`/store/${storeId}/front`, Ajax.GET, true);
};

export const getStoreSubCategory = (categoryId) => {
  return Ajax.Request(`/store/collection/${categoryId}`, Ajax.GET, true);
};

export const getStoreDeliveryDetails = (storeId) => {
  return Ajax.Request(`/store/${storeId}/info`, Ajax.GET, true);
};

export const getIndividualProductDetail = (productId) => {
  return Ajax.Request(`/products/${productId}`, Ajax.GET, true);
};

// export const getProductsOfSubCategory = (id) => {
//   return Ajax.Request(`/product/subcategory/${id}/`, Ajax.GET, true);
// };

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
  SendOtpToRegister,
  VerifyOtpToRegister,
  LoginUser,
  VerifyOtpToLogin,
  refreshToken,
  resendOtp,
  resetPasswordUser,
  changePasswordUser,
  GetUserDetails,
  changeName,
  changeEmail,
  changePasswordOfUser,
  changePhoneno,
  verifyChangedPhoneNumber,
  getCategoryFilter,
  getShopsByCategory,
  getStoreFrontDetails,
  getStoreSubCategory,
  getStoreDeliveryDetails,
  getIndividualProductDetail,
  RegisterAddress,
  getUserAddress,
  editUserAddress,
};

export default API;
