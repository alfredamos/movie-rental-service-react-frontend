import { Observable, from, map } from "rxjs";
import { AxiosResponse } from "axios";
import Axios from "../utils/data/axios-instance.util";
//import Axios from "../utils/data/axios-util";

export class DataService<T> {
  constructor(public url: string) {}
  create(resource: T): Observable<T> {
    const response = from(Axios.post(this.url, resource)) as Observable<
      AxiosResponse<Response>
    >;
    return response.pipe(map((resp) => resp.data)) as Observable<T>;
  }

  findAll(): Observable<T[]> {
    const response = from(Axios.get(this.url)) as Observable<
      AxiosResponse<Response>
    >;
    return response.pipe(map((resp) => resp.data)) as unknown as Observable<
      T[]
    >;
  }

  findOne(id: string): Observable<T> {
    const response = from(Axios.get(`${this.url}/${id}`)) as Observable<
      AxiosResponse<Response>
    >;
    return response.pipe(map((resp) => resp.data)) as Observable<T>;
  }

  update(id: string, resource: T): Observable<T> {
    const response = from(
      Axios.patch(`${this.url}/${id}`, resource)
    ) as Observable<AxiosResponse<Response>>;
    return response.pipe(map((resp) => resp.data)) as Observable<T>;
  }

  remove(id: string): Observable<T> {
    const response = from(Axios.delete(`${this.url}/${id}`)) as Observable<
      AxiosResponse<Response>
    >;
    return response.pipe(map((resp) => resp.data)) as Observable<T>;
  }
}
