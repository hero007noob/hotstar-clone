// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default function FirebaseTest() {
  // const firebaseConfig = {
  //   apiKey: "AIzaSyDhHcqUufwEOuvHM8mmdn-KlIe1-zBAgMI",
  //   authDomain: "hotstar-8bfad.firebaseapp.com",
  //   projectId: "hotstar-8bfad",
  //   storageBucket: "hotstar-8bfad.appspot.com",
  //   messagingSenderId: "826062527249",
  //   appId: "1:826062527249:web:b7c711029f457849118ab0",
  //   measurementId: "G-H622PMG142",
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth();
  // auth.languageCode = "it";
  // //   const analytics = getAnalytics(app);

  // // window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  // //     'size': 'invisible',
  // //     'callback': (response) => {
  // //       // reCAPTCHA solved, allow signInWithPhoneNumber.
  // //       onSignInSubmit();
  // //     }
  // //   }, auth);
  // //   window.recaptchaVerifier = new RecaptchaVerifier(
  // //     "recaptcha-container",
  // //     {},
  // //     auth
  // //   );

  // //   const phoneNumber = "+916280106763";
  // //   const appVerifier = window.recaptchaVerifier;
  // //   console.log("ah");
  // //   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  // //     .then((confirmationResult) => {
  // //       console.log("oh");
  // //       // SMS sent. Prompt user to type the code from the message, then sign the
  // //       // user in with confirmationResult.confirm(code).
  // //       window.confirmationResult = confirmationResult;
  // //       // ...
  // //     })
  // //     .catch((error) => {
  // //       // Error; SMS not sent
  // //       // ...
  // //     });
  // function sendVerificationCode() {
  //   var phoneNumber = "+916280106763"; // replace with user's phone number
  //   var appVerifier = window.recaptchaVerifier; // optional, use if you're using reCAPTCHA
  //   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  //     .then(function (confirmationResult) {
  //       window.confirmationResult = confirmationResult;
  //       console.log("Verification code sent!");
  //     })
  //     .catch(function (error) {
  //       console.error("Error sending verification code:", error);
  //     });
  // }
  // function xxx() {
  //   // 'recaptcha-container' is the ID of an element in the DOM.
  //   var applicationVerifier = window.recaptchaVerifier;
  //   var provider = new PhoneAuthProvider();
  //   provider
  //     .verifyPhoneNumber("+16505550101", applicationVerifier)
  //     .then(function (verificationId) {
  //       var verificationCode = window.prompt(
  //         "Please enter the verification " +
  //           "code that was sent to your mobile device."
  //       );
  //       return PhoneAuthProvider.credential(verificationId, verificationCode);
  //     })
  //     .then(function (phoneCredential) {
  //       return auth().signInWithCredential(phoneCredential);
  //     });
  // }

  React.useEffect(() => {
    // sendVerificationCode();
    // xxx();

    return () => {};
  }, []);

  return <div>FirebaseTest</div>;
}
