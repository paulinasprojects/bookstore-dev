
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaGoogle, FaFacebookF} from "react-icons/fa";
import "@/styles/modal.scss";

import whiteLogo from "/white-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";




const SignInPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
 
  const toggleModal = () => {
   setOpenModal(!openModal);
   navigate("/")
  }


  return (
    <div className="modal-background">
      <div className="logo-button-container">
        <img src={whiteLogo} alt=""  className="white-logo"/>
        <div className="login-modal-title-container">
          <span className="login-modal-title">Login</span>
          <span className="login-modal-description">You can buy books with us here. All of them are reliable, <br /> cheap and on good quality. The selection is wide, we <br /> have almost every book that you could ever wish for. You <br /> won't regret ordering from us!</span>
        </div>
      </div>
      <div className="right-container">
        <div className="login-modal-close-button-container">
          <IoIosCloseCircleOutline onClick={toggleModal} className="login-modal-close-button"/>
        </div>
        <div className="login-modal-input-container">
          <div>
            <input type="email" placeholder="Email Address" className="login-modal-input" required />
          </div>
          <div>
            <input type="password" placeholder="Password" className="login-modal-input" required />
          </div>
          <div className="forgot-button-container">
            <Link to="/forgot-password" className="forgot-button">Forgot Password?</Link>
          </div>
          <button className="login-modal-login-button" type="submit">Login</button>
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
            <span>Don’t have an account?</span>
            <Link to="/sign-up" className="sign-up-link">Sign Up here</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage