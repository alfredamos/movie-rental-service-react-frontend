import { SignupForm } from "../../forms/auth/signup.form";
import { SignupDto } from "../../models/auth/signup.auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/auth.service";
import { Gender } from "../../enum/gender.enum";


export const Signup = () => {
  const [authUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: Gender.Male,
  } as SignupDto);

  const navigate = useNavigate();

  const url = "signup";

  const signupSubmitHandler = (signupDto: SignupDto) => {
    console.log({ signupDto });
    authService
      .createAuth(url, signupDto)
      .subscribe();

    navigate("/");
  };

  const backToList = () => {
    navigate("/");
  };

  return (
    <SignupForm
      initialAuthUser={authUser}
      backToList={backToList}
      onSignup={signupSubmitHandler}
    />
  );
};
