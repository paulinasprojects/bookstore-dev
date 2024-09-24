import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import logo from "/bookstore-v2-logo.svg";
import { ForgotPasswordLock } from "@/components/icons";

import "@/styles/forgot-password.scss";

const ForgotPassword = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
 
  const toggleClose = () => {
   setOpenModal(!openModal);
   navigate("/");
  };


  return (
    <div className="test-container">
      <div className="forgot-password-header-container">
        <img src={logo} alt="" />
        <IoIosCloseCircleOutline className="forgot-password-close-button" onClick={toggleClose}/>
      </div>
      <div className="forgot-password-content-container">
        <div className="password-lock">
          <ForgotPasswordLock className="password-icon"/>
        </div>
        <div className="forgot-password-title-container">
          <span className="forgot-password-title">Want to change your <br /> <span className="password-span">password?</span></span>
        </div>
        <div className="forgot-password-description-container">
          <span className="forgot-password-description">No worries we'll send you reset instructions!</span>
        </div>
        <div className="forgot-password-input-container">
          <input type="email" placeholder="jeremyzucker@email.com" className="forgot-password-input" />
        </div>
        <div>
          <button className="send-now-button" onClick={() => navigate("/forgot-password/step-2")}>Send now</button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword