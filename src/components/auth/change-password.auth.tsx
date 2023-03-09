import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChangePasswordForm } from "../../forms/auth/change-password.form";
import { ChangePasswordDto } from "../../models/auth/change-password.auth";
import { authService } from "../../services/auth.service";

const initialAuthUser: ChangePasswordDto = {
  email: "",
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const ChangePassword = () => {
  const [authUser] = useState(initialAuthUser);

  const navigate = useNavigate();

  const url = "change-password";

  const changePasswordSubmitHandler = (
    changePasswordDto: ChangePasswordDto
  ) => {
    console.log({ changePasswordDto });
    authService
      .update(url, changePasswordDto)
      .subscribe((authUserResponse) =>
        console.log("AuthUserResponse : ", authUserResponse)
      );

    navigate("/");
  };

  const backToList = () => {
    navigate("/");
  };

  return (
    <ChangePasswordForm
      initialAuthUser={authUser}
      backToList={backToList}
      onChangePassword={changePasswordSubmitHandler}
    />
  );
};
