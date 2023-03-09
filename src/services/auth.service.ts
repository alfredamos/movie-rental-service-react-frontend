import { LoginDto } from "../models/auth/login.auth";
import { EditProfileDto } from "../models/auth/edit-profile.auth";
import { ChangePasswordDto } from "../models/auth/change-password.auth";
import { SignupDto } from "../models/auth/signup.auth";
import { AuthUser } from "../models/auth/auth-user.auth";
import { BehaviorSubject, Observable, from, map } from "rxjs";
import { DataService } from "./data.service";
import { AxiosResponse } from "axios";
import Axios from "../utils/data/axios-instance.util";
//import Axios from "../utils/data/axios-util";

type Auth =
  | LoginDto
  | ChangePasswordDto
  | EditProfileDto
  | SignupDto
  | AuthUser;

class AuthService extends DataService<Auth> {
  private authUserSubject = new BehaviorSubject<AuthUser>({
    id: "",
    name: "",
    isLoggedIn: false,
    message: "Not yet logged-in",
  });
  authUser$ = this.authUserSubject.asObservable();

  constructor(public baseUrl: string) {
    super(baseUrl);
  }

  updateAuth$(value: AuthUser): void {
    this.authUserSubject.next(value);
  }

  createAuth(url: string, resource: Auth): Observable<Auth> {
    const response = from(
      Axios.post(`${this.baseUrl}/${url}`, resource)
    ) as Observable<AxiosResponse<Response>>;
    return response.pipe(
      map((resp) => resp.data)
    ) as unknown as Observable<Auth>;
  }
}

const baseUrl: string = process.env.REACT_APP_AUTH_URL!;
//const url = "/auth";

//console.log({ baseUrl });

export const authService = new AuthService(baseUrl);
