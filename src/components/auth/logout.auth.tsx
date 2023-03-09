import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from '../../services/auth.service';
import { useObservable } from "../../utils/hooks/use-observable.hook";
import { AuthUser } from "../../models/auth/auth-user.auth";
import { DeleteItem } from "../../utils/general/delete-item.util";
import { LogoutPage } from "./logout-page";
import {UserType} from "../../enum/user-type.enum";


export const Logout = () => {
  const authUser = useObservable(authService.authUser$, {} as AuthUser);
  const [deleteTitle] = useState("Logout Confirmation!");
  const [deleteMessage] = useState("Do you want to logout?");

  const navigate = useNavigate();

  const logoutHandler = (value: boolean) => {
    if (value) {
      authService.updateAuth$({
        id: "",
        name: "",
        userType: UserType.Customer,
        message: "Is not logged-in",
        token: "",
        isLoggedIn: false
      } as AuthUser);
      localStorage.removeItem('token');
      navigate("/logout-page");
    } else {
     
      navigate('/');
    }
  };

  return (
    <>
      {authUser?.isLoggedIn ? (
        <DeleteItem
          deleteTitle={deleteTitle}
          deleteMessage={deleteMessage}
          deleteItem={logoutHandler}
          cancelButton="Back"
          submitButton="Logout"
        />
      ) : (
        <LogoutPage />
      )}
    </>
  );
};
