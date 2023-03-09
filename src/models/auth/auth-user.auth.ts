import { UserType } from "../../enum/user-type.enum";

export class AuthUser{
    id!: string;
    name!: string;
    userType?: UserType;
    isLoggedIn?: boolean;
    token?: string;
    message?: string;
}