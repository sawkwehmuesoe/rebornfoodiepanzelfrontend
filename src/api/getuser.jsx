import api, { baseUrl } from "../config/axios";

export const getuser = async (body) => {return await api.get(`${baseUrl}/getuser`, body); };
export const createbuyuser = async (body) => {return await api.post(`${baseUrl}/free-recipe/store`, body); };
export const getbuyuser = async (userId) => {return await api.get(`${baseUrl}/getbuy/${userId}`); };


