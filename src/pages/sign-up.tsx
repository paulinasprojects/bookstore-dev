import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaGoogle, FaFacebookF} from "react-icons/fa";
import logo from "/bookstore-v2-logo.svg";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInputField from "@/components/form-input-field";

import "@/styles/sign-up.scss";

const signUpSchema = z.object({
  name: z.string().min(3, {message: "Full name is required"}),
  email: z.string().min(1, {message: "Email is required"}).email({message: "Invalid email address"}),
  password: z.string().min(8, {message: "Password must be at least 8 characters long."}),
})

const SignUpPage = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
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

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    console.log(values);
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
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-modal-input-container">
          <div>
            <FormInputField
              register={register}
              name="name"
              placeholer="Full Name"
              error={errors.name}
            />
          </div>
          <div>
             <FormInputField
              register={register}
              name="email"
              placeholer="Email Address"
              error={errors.email}
            />
          </div>
          <div>
            <FormInputField
              register={register}
              name="password"
              placeholer="Password"
              error={errors.password}
            />
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
        </form>
      </div>
    </div>
  )
}

export default SignUpPage