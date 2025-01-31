import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaGoogle, FaFacebookF} from "react-icons/fa";
import whiteLogo from "/white-logo.png";
import { signInSchema } from "@/lib/schemas";
import InputField from "@/components/input-field";

import "@/styles/sign-in.scss";

const SignInPage = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
 
  const toggleClose = () => {
   setOpenModal(!openModal);
   navigate("/");
  };

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    console.log(values);
    reset();
  };


  return (
    <div className="sign-in-modal-background">
      <div className="logo-button-container">
        <img src={whiteLogo} alt=""  className="white-logo"/>
        <div className="login-modal-title-container">
          <span className="login-modal-title">Login</span>
          <span className="login-modal-description">You can buy books with us here. All of them are reliable, <br /> cheap and on good quality. The selection is wide, we <br /> have almost every book that you could ever wish for. You <br /> won't regret ordering from us!</span>
        </div>
      </div>
      <div className="right-container">
        <div className="login-modal-close-button-container">
          <IoIosCloseCircleOutline onClick={toggleClose} className="login-modal-close-button"/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-modal-input-container">
          <div>
            <InputField
              className="login-modal-input"
              register={register}
              name="email"
              placeholer="Email Address"
              error={errors.email}
              type="email"
              inputProps={{autoComplete: "email"}}
            />
          </div>
          <div>
          <InputField
              className="login-modal-input"
              register={register}
              name="password"
              placeholer="Password"
              error={errors.password}
              type="password"
              inputProps={{autoComplete: "current-password"}}
            />
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
        </form>
      </div>
    </div>
  )
}

export default SignInPage