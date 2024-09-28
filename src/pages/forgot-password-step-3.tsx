import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import logo from "/bookstore-v2-logo.svg";
import { NewPassword } from "@/components/icons";
import { newPasswordSchema } from "@/lib/schemas";
import InputField from "@/components/input-field";

import "@/styles/forgot-password-step-3.scss";


const ForgotPasswordStep3 = () => {

  const { register, reset,handleSubmit, formState: { errors } } = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    }
  });
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
 
  const toggleClose = () => {
   setOpenModal(!openModal);
   navigate("/");
  };

  const onSubmit = async (values: z.infer<typeof newPasswordSchema>) => {
    console.log(values);
    reset();
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="new-password-container">
          <InputField
              className="new-password-input"
              register={register}
              name="password"
              placeholer="New Password"
              error={errors.password}
              type="password"
            />
            <span className="new-password-descr">Must be at least 8 characters</span>
          </div>
          <div className="new-password-confirm-container">
          <InputField
              className="new-password-input"
              register={register}
              name="confirmPassword"
              placeholer="Confirm Password"
              error={errors.confirmPassword}
              type="password"
            />
          </div>
          <div className="reset-password-button-container">
            <button className="reset-password-button" onClick={() => navigate("/forgot-password/step-4")} type="submit">Reset Password</button>
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