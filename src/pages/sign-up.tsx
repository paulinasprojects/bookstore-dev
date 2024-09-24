import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaGoogle, FaFacebookF} from "react-icons/fa";
import logo from "/bookstore-v2-logo.svg";

import "@/styles/sign-up.scss"

const SignUpPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
 
  const toggleClose = () => {
   setOpenModal(!openModal);
   navigate("/");
  };

  return (

    <div className="sign-up-modal-background">
      <div className="sign-up-logo-button-container">
        <img src={logo} alt=""  className="white-logo"/>
        <div className="sign-up-modal-title-container">
          <span className="sign-up-login-modal-title">Sign Up</span>
          <span className="sign-up-login-modal-description">Are you looking for a great gift for a friend, family <br /> member or yourself? Have a look on our website to find <br /> the perfect book for you!</span>
        </div>
      </div>
      <div className="right-container">
        <div className="login-modal-close-button-container">
          <IoIosCloseCircleOutline onClick={toggleClose} className="login-modal-close-button"/>
        </div>
        <div className="login-modal-input-container">
          <div>
            <input type="text" placeholder="Full name" className="login-modal-input" required />
          </div>
          <div>
            <input type="email" placeholder="Email Address" className="login-modal-input" required />
          </div>
          <div>
            <input type="password" placeholder="Password" className="login-modal-input" required />
          </div>
          <div className="terms-and-services-button-container">
            <Link to="/forgot-password" className="terms-and-services-button">By registering, I agree Terms and Conditions and <br /> Privacy Policy.</Link>
          </div>
          <button className="login-modal-login-button" type="submit">Register</button>
          <span className="or-span">or</span>
          <div className="login-modal-social-button-container">
            <button className="login-button-social-google">
              <FaGoogle/>
              Google
            </button>
            <button className="login-button-social-facebook">
              <FaFacebookF/>
              Facebook
            </button>
          </div>
          <div className="login-button-dont-have-account">
            <span>Already have an account?</span>
            <Link to="/sign-in" className="sign-up-link">Login here</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage