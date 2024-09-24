import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import logo from "/bookstore-v2-logo.svg";
import { CheckCircle } from "@/components/icons";

import "@/styles/forgot-password-step-4.scss";

const ForgotPasswordStep4 = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
 
  const toggleClose = () => {
   setOpenModal(!openModal);
   navigate("/");
  };

  return (
    <div>
      <div className="forgot-password-header-container">
        <img src={logo} alt="" />
        <IoIosCloseCircleOutline className="forgot-password-close-button" onClick={toggleClose}/>
      </div>
      <div className="forgot-password-step-content-container">
        <div className="check-cirle">
          <CheckCircle className="message-icon"/>
        </div>
      <div className="forgot-password-title-container">
        <span className="forgot-password-title">Password Reset</span>
      </div>
      <div className="forgot-password-description-container">
        Your password has been successfully reset. Click <br /> <span className="login-span">below to login magically!</span>
      </div>
      <div>
          <button className="send-now-button" onClick={() => navigate("/sign-in")}>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordStep4