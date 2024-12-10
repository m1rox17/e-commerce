import "./authentication.scss";

import { auth, provider } from "/firebase-config.js";
import { signInWithPopup } from "firebase/auth";

import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { FaGoogle } from "react-icons/fa";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function SignUp() {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    cookies.set("auth-token", result.user.refreshToken);
    console.log(result);
  };
  return (
    <div>
      <header>
        <h1>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h1>
        <span>ShopNow</span>
      </header>
      <div className="container">
        <nav>
          <h1>Exclusive</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
          <div className="searchbar">
            <input type="text" placeholder="What are you looking for?" />
            <FiSearch className="searchbar-icon" />
          </div>
          <div>
            <IoIosHeartEmpty className="like" size={24} />
            <GrCart size={24} />
          </div>
        </nav>
      </div>
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
      <footer>
        <h1>
          Developed by{" "}
          <a href="https://github.com/m1rox17" target="_blank">
            m1rox17
          </a>
        </h1>
        <h1>© Copyright Rimel 2022. All right reserved</h1>
        <h1>
          Fork this project{" "}
          <a href="https://github.com/m1rox17/e-commerce" target="_blank">
            HERE
          </a>
        </h1>
      </footer>
    </div>
  );
}
