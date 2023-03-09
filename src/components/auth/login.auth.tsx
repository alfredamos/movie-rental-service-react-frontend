import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { LoginDto } from "../../models/auth/login.auth";
import { authService } from "../../services/auth.service";
import { LoginForm } from "../../forms/auth/login.form";
import { AuthUser } from "../../models/auth/auth-user.auth";


const  initialAuthUser:LoginDto =  {
  email: "",
  password: ""
}


export const Login = () => {
  const [authUser] = useState(initialAuthUser);

  const navigate = useNavigate();

  const url = "login";

  const loginSubmitHandler = (loginDto: LoginDto) => {
    console.log({ loginDto });

    authService.createAuth(
      url,
      loginDto
    ).subscribe(auth => {
      const authUser = auth as AuthUser;
      console.log("authUser : ", authUser);
      const token = authUser.token;
      console.log({token});
      localStorage.setItem("token", token!);
      authService.updateAuth$(authUser);
      navigate("/");
    });
    
  };

  const backToList = () => {
    navigate('/');
  };

  return (
    <LoginForm
      initialAuthUser={authUser}
      backToList={backToList}
      onLogin={loginSubmitHandler}
    />
  );
};
