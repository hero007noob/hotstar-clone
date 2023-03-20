import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import firebaseConfig from "./firebase";
const FirebaseTest3 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
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
  const recaptchaVerifier = window.recaptchaVerifier;
  const handleSendCode = () => {
    // create a reCAPTCHA instance

    // send verification code to user's phone number
    signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        setMessage("Verification code sent!");
      })
      .catch((error) => {
        setMessage(`Error sending verification code: ${error.message}`);
      });
  };

  const handleVerifyCode = () => {
    // verify the verification code entered by the user
    // const credential = auth.PhoneAuthProvider.credential(
    //   verificationId,
    //   verificationCode
    // );
    // auth
    //   .signInWithCredential(credential)
    //   .then((userCredential) => {
    //     setMessage("Phone number verified successfully!");
    //   })
    //   .catch((error) => {
    //     setMessage(`Error verifying phone number: ${error.message}`);
    //   });
    //   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    //     .then((confirmationResult) => {
    //       // SMS sent. Prompt user to type the code from the message, then sign the
    //       // user in with confirmationResult.confirm(code).
    //       console.log("sex");
    //       window.confirmationResult = confirmationResult;
    //       // ...
    //     })
    //     .catch((error) => {
    //       // Error; SMS not sent
    //       // ...
    //       console.log("sexy", error);
    //     });
  };

  return (
    <div>
      <h1>Phone Authentication</h1>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div id="recaptcha-container"></div>
      <div>
        <button onClick={handleSendCode}>Send Verification Code</button>
      </div>
      <div>
        <label htmlFor="code">Verification Code:</label>
        <input
          type="text"
          id="code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleVerifyCode}>Verify Code</button>
      </div>
      <div>{message}</div>
    </div>
  );
};

export default FirebaseTest3;
