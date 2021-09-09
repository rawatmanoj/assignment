import axios from "axios";
import { base_url } from "./Constants/ApiConstants";
// Set config defaults when creating the instance
const axiosInstance = axios.create({
    baseURL: base_url
});

axiosInstance.interceptors.response.use(
    response => {

        return response
    },
    error => {


        if (error.response) {
            console.log(error.response);
        }


        return Promise.reject(error);
    }
)



// Send a GET request
export const getRequest = (url) => {
    return axiosInstance({
        method: "get",
        url,
    });
}


