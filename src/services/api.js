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

export const getProductsOfShop = (storeId) => {
  return Ajax.Request(`/store/collection/store/${storeId}`, Ajax.GET, true);
};

export const getProductsOfSubCategory = (subcategoryId) => {
  return Ajax.Request(
    `/store/collection/subcategory/${subcategoryId}`,
    Ajax.GET,
    true
  );
};

export const getStoreDeliveryDetails = (storeId) => {
  return Ajax.Request(`/store/${storeId}/info`, Ajax.GET, true);
};

export const getIndividualProductDetail = (productId) => {
  return Ajax.Request(`/products/${productId}`, Ajax.GET, true);
};

export const addToSavedProducts = (payload) => {
  return Ajax.Request(`/products/addtosaved`, Ajax.POST, true, payload);
};

export const delSavedProducts = (productId) => {
  return Ajax.Request(`/products/saved/remove/${productId}`, Ajax.DELETE, true);
};
// export const getProductsOfSubCategory = (id) => {
//   return Ajax.Request(`/product/subcategory/${id}/`, Ajax.GET, true);
// };

export const Search = (filter) => {
  return Ajax.Request(
    `/store/search`,
    Ajax.GET,
    true,
    null,
    null,
    null,
    filter
  );
};

export const SearchInsideStore = (storeFilter) => {
  return Ajax.Request(
    `/store/inside/search`,
    Ajax.GET,
    true,
    null,
    null,
    null,
    storeFilter
  );
};

export const RegisterAddress = (payload) => {
  return Ajax.Request(`/add-address`, Ajax.POST, true, payload);
};

export const getUserAddress = () => {
  return Ajax.Request(`/addresses`, Ajax.GET, true);
};

export const editUserAddress = (payload, addressId) => {
  return Ajax.Request(
    `/addresses/${addressId}/edit-address`,
    Ajax.POST,
    true,
    payload
  );
};

export const deleteUserAddress = (addressId) => {
  return Ajax.Request(
    `/addresses/${addressId}/delete-address`,
    Ajax.DELETE,
    true
  );
};

export const deliveryTimeInCheckout = (storeId) => {
  return Ajax.Request(
    `/orders/delivery-timing?storeId=${storeId}`,
    Ajax.GET,
    true
  );
};

export const getGiftImages = () => {
  return Ajax.Request(`/orders/giftcard/images`, Ajax.GET, true);
};

export const getPickUpAddress = (storeId) => {
  return Ajax.Request(
    `/addresses/pickup-address?storeId=${storeId}`,
    Ajax.GET,
    true
  );
};

export const calculateSubTotal = (payload) => {
  return Ajax.Request(`/orders/calculate-subtotal`, Ajax.POST, true, payload);
};

export const addOrder = (payload) => {
  return Ajax.Request(`/orders/checkout`, Ajax.POST, true, payload);
};

export const getOrder = () => {
  return Ajax.Request(`/orders/my-orders`, Ajax.GET, true);
};

export const getOrderDetails = (orderId) => {
  return Ajax.Request(
    `/orders/my-orders/orderdetail?orderId=${orderId}`,
    Ajax.GET,
    true
  );
};

export const googleAuth = () => {
  return Ajax.Request(`/auth/google`, Ajax.GET, true);
};

export const getListCoverImages = () => {
  return Ajax.Request(`/store/lists/cover-images`, Ajax.GET, true);
};

export const createList = (payload) => {
  return Ajax.Request(`/store/lists/createlist`, Ajax.POST, true, payload);
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
  getProductsOfShop,
  getStoreDeliveryDetails,
  getIndividualProductDetail,
  getProductsOfSubCategory,
  addToSavedProducts,
  delSavedProducts,
  Search,
  SearchInsideStore,
  RegisterAddress,
  getUserAddress,
  editUserAddress,
  deleteUserAddress,
  deliveryTimeInCheckout,
  getGiftImages,
  getPickUpAddress,
  calculateSubTotal,
  addOrder,
  getOrder,
  getOrderDetails,
  getListCoverImages,
  createList,
  googleAuth,
};

export default API;
