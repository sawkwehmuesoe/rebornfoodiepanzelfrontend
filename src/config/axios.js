import axios from "axios";

export const baseUrl = import.meta.env.VITE_BASE_URL;

const token = localStorage.getItem('token');

const api = axios.create({
    baseUrl: baseUrl,
    headers : {
        contentType : "application/json",
        "Access-Control-Allow-Origin":"*",
        Accept:"application/json",
        Authorization: `Bearer ${token}`
    }
});

export default api