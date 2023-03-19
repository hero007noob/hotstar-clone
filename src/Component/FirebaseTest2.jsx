import React, { useEffect } from "react";
import "firebase/auth";
import firebaseConfig from "./firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
function FirebaseTest2() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    auth.settings.appVerificationDisabledForTesting = true;
    const getPhoneNumberFromUserInput = () => {
      return "+916280106763";
    };
    const phoneNumber = getPhoneNumberFromUserInput();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
          console.log("umm", response);
        },
      },
      auth
    );

    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("sex");
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("sexy", error);
      });
  }, []);

  return (
    <>
      <h1>REACT PHONE AUTHENTICATION</h1>
      <div id="firebaseui-auth-container"></div>
      <button id="sign-in-button">Sign in</button>
    </>
  );
}

export default FirebaseTest2;
