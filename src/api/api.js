import axios from "axios";



const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        Authorization: `Bearer 2|2tAaPNBHnasnDJxkg7a4tDcrGtHKYOy5NWX2a2OBabc2cd3c`
    }
});

const userApi = {
    get(){
        return axiosInstance.get("/user").then(res=>res.data)
    }
}

export const api =  {
    userApi
}