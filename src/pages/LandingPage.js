import React, { useState } from "react";
import Navbar from "../components/LandingPageComponents/Navbar";
import Wrapper from "../components/LandingPageComponents/Wrapper";
import Store from "../components/LandingPageComponents/Store";
import ScannerWrapper from "../components/LandingPageComponents/ScannerWrapper";
import GroceryDelivery from "../components/LandingPageComponents/GroceryDelivery";
import Publicity from "../components/LandingPageComponents/Publicity";
import QuestionAnswers from "../components/LandingPageComponents/QuestionAnswers";
import Footer from "../components/LandingPageComponents/Footer";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";

const LandingPage = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [resetPasswordModal, setResetPasswordModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  //console.log(createPasswordModal);
  //console.log("dsdsd");

  return (
    <>
      <Navbar
        onLoginButton={() => setLoginModal(true)}
        onSignupHandler={() => {
          setSignUpModal(true);
        }}
      />
      <Wrapper />
      <Store />
      <ScannerWrapper />
      <GroceryDelivery />
      <Publicity />
      <QuestionAnswers />
      <Footer />
      {loginModal && (
        <Login
          login={loginModal}
          onCancel={() => {
            setLoginModal(false);
          }}
          onClickSignup={() => {
            setLoginModal(false);
            setSignUpModal(true);
          }}
          onResetpasswordHandler={() => {
            setLoginModal(false);
            setResetPasswordModal(true);
          }}
        />
      )}
      {resetPasswordModal && (
        <ResetPassword
          resetPassword={resetPasswordModal}
          onClickSignup={() => {
            setResetPasswordModal(false);
            setSignUpModal(true);
          }}
          onClickBack={() => {
            setResetPasswordModal(false);
            setLoginModal(true);
          }}
        />
      )}
      {signUpModal && (
        <Signup
          signup={signUpModal}
          onCancel={() => setSignUpModal(false)}
          onClickLogin={() => {
            setSignUpModal(false);
            setLoginModal(true);
          }}
        />
      )}
    </>
  );
};

export default LandingPage;
