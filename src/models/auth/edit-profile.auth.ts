import { Gender } from "../../enum/gender.enum";
import { UserType } from "../../enum/user-type.enum";

export class EditProfileDto{
    name!: string;
    email!: string;
    phone!: string;
    gender!: Gender;
    userType?: UserType;
    password!: string;
    confirmPassword!: string;
}