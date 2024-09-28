import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import logo from "/bookstore-v2-logo.svg";
import { ForgotPasswordLock } from "@/components/icons";
import { forgotPasswordSchema } from "@/lib/schemas";
import InputField from "@/components/input-field";


import "@/styles/forgot-password.scss";


const ForgotPassword = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    }
  });

  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
 
  const toggleClose = () => {
   setOpenModal(!openModal);
   navigate("/");
  };

  const onSubmit = async (values: z.infer<typeof  forgotPasswordSchema>) => {
    console.log(values);
    reset();
  };


  return (
    <div className="">
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="forgot-password-input-container">
            <InputField
              className="forgot-password-input"
              register={register}
              name="email"
              placeholer="jeremyzucker@email.com"
              error={errors.email}
            />
          </div>
          <div>
            <button className="send-now-button" onClick={() => navigate("/forgot-password/step-2")} type="submit">Send now</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword