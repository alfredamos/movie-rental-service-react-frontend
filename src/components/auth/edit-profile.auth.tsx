import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoDto } from "../../models/auth/user-info.auth";
import { Gender } from "../../enum/gender.enum";
import { UserType } from "../../enum/user-type.enum";
import { EditProfileDto } from "../../models/auth/edit-profile.auth";
import { authService } from "../../services/auth.service";
import { EditProfileForm } from '../../forms/auth/edit-profile.form';
import {customerService} from "../../services/customer.service";


const initialUserProfile: UserInfoDto = {
  name: "",
  email: "",
  phone: "",
  gender: Gender.Male,
  userType: UserType.Customer,
};

const initialAuthUser: EditProfileDto = {
  ...initialUserProfile,
  password: "",
  confirmPassword: "",
};

export const EditProfile = () => {
  const [authUser, setAuthUser] = useState(initialAuthUser);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const editProfileUrl = "edit-profile";
  const currentUserUrl = "current-user";

  useEffect(() => {
    customerService.getCurrentUser(currentUserUrl).subscribe(userInfo => {
      setAuthUser({
        ...userInfo,
        password: "",
        confirmPassword: "",
      });
      setIsLoading(false);
    });
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const EditProfileSubmitHandler = (editProfileDto: EditProfileDto) => {
    console.log({ editProfileDto });
    authService.update(
      editProfileUrl,
      editProfileDto
    ).subscribe(authUserResponse => console.log({ authUserResponse }));
     
    navigate("/");
  };

  const backToList = () => {
    navigate('/');
  };

  return (
    <>
      {!isLoading && (
        <EditProfileForm
          initialAuthUser={authUser}
          backToList={backToList}
          onEditProfile={EditProfileSubmitHandler}
        />
      )}
    </>
  );
};
