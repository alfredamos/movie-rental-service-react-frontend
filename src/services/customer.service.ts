import { DataService } from "./data.service";
import { CustomerDto } from "../models/customers/customer.model";
import { BehaviorSubject, from, Observable, map } from "rxjs";
import Axios from "../utils/data/axios-instance.util";
import { AxiosResponse } from "axios";
import { UserInfoDto } from "../models/auth/user-info.auth";

class CustomerService extends DataService<CustomerDto> {
  private customersSubject = new BehaviorSubject<CustomerDto[]>(null!);

  constructor(public baseUrl: string) {
    super(baseUrl);
  }

  updateCustomers$(value: CustomerDto[]): void {
    this.customersSubject.next(value);
  }

  getCurrentUser(url: string): Observable<UserInfoDto> {
    const userUrl = `${baseUrl}/${url}`;
    console.log({userUrl});
    const response = from(Axios.get(userUrl)) as Observable<
      AxiosResponse<Response>
    >;
    return response.pipe(
      map((resp) => resp.data)
    ) as unknown as Observable<UserInfoDto>;
  }
}

const baseUrl: string = process.env.REACT_APP_CUSTOMERS_URL!;

export const customerService = new CustomerService(baseUrl);
