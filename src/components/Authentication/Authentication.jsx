import "./authentication.scss";

import { auth, provider } from "/firebase-config.js";
import { signInWithPopup } from "firebase/auth";

import { FaGoogle } from "react-icons/fa";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Authentication() {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    cookies.set("auth-token", result.user.refreshToken);
    console.log(result);
  };
  return (
    <div>
      <div className="sign">
        <img src="/src/img/authentication.png" alt="authentication" />
        <div className="sign__right">
          <h1>Continue with Google</h1>
          <button className="google-button">
            <FaGoogle size={18} />
            <span onClick={signInWithGoogle} className="text">
              Sign up with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
