import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import logo from "/bookstore-v2-logo.svg";
import { NewPassword } from "@/components/icons";

import "@/styles/forgot-password-step-3.scss";


const ForgotPasswordStep3 = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
 
  const toggleClose = () => {
   setOpenModal(!openModal);
   navigate("/");
  };

  return (
    <div>
      <div className="forgot-password-step-3-container">
        <img src={logo} alt="" />
        <IoIosCloseCircleOutline className="forgot-password-close-button" onClick={toggleClose}/>
      </div>
      <div className="forgot-password-content-container">
        <div className="new-password">
          <NewPassword className="password-icon"/>
        </div>
        <div className="forgot-password-title-container">
          <span className="forgot-password-title">Set New Password</span>
        </div>
        <div className="forgot-password-description-container">
          <span className="forgot-password-description">Your password must be different from your <br /> <span className="previous-password">previously used password</span></span>
        </div>
        <form>
          <div className="new-password-container">
            <input type="password" placeholder="New Password" className="new-password-input" required />
            <span className="new-password-descr">Must be at least 8 characters</span>
          </div>
          <div className="new-password-confirm-container">
            <input type="password" placeholder="Confirm Password" className="new-password-input" required />
          </div>
          <div className="reset-password-button-container">
            <button className="reset-password-button" onClick={() => navigate("/forgot-password/step-3")}>Reset Password</button>
          </div>
          <div className="new-password-resend-container">
          <span>Didn’t receive the email?
            <span className="resend-span">Resend</span>
          </span>
        </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordStep3