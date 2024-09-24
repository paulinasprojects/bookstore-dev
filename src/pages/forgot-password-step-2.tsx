import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import logo from "/bookstore-v2-logo.svg";
import { ForgotPasswordMessage } from "@/components/icons";

import "@/styles/forgot-password-step-2.scss";

const ForgotPasswordStep2 = () => {
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
        <div className="password-message">
          <ForgotPasswordMessage className="message-icon"/>
        </div>
        <div className="forgot-password-title-container">
          <span className="forgot-password-title">Check Your Email</span>
        </div>
        <div className="forgot-password-description-container">
          <span className="forgot-password-description">We sent a reset link to your email: <br /> <span className="email-password">jeremyzucker@email.com</span></span>
        </div>
        <div>
          <button className="send-now-button" onClick={() => navigate("/forgot-password/step-3")}>Open Email App</button>
        </div>
        <div className="resend-container">
          <span>Didn’t receive the email?
            <span className="resend-span">Resend</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordStep2