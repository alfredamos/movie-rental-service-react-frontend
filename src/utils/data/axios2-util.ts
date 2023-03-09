/* //import  { AxiosRequestConfig, AxiosInstance, AxiosPromise } from 'axios';
import { AxiosRequestConfig} from "axios";
//import Axios from "axios-observable"
import axios from "axios";

const bearerToken = localStorage.getItem('token');

export const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: 'http://localhost:3100/api',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`,
    },
};


const initializedAxios = (config: AxiosRequestConfig) => {
   const axiosInstance = axios.create(config);

   axiosInstance.defaults.headers.common['authorization'] = `Bearer ${bearerToken}`;
   //axiosInstance.interceptors.request.use(config)

  /*
        Add default headers, interceptors etc..
    
   console.log("I'm here, token : ", bearerToken);

   
   return axiosInstance;
};



const axiosInstance = initializedAxios(axiosRequestConfiguration);

export default axiosInstance; */


export class Books {
    isbn!: string;
}