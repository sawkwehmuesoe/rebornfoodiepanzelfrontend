import api, { baseUrl } from "../config/axios";

export const postcomment = async (body) => {return await api.post(`${baseUrl}/comments`, body); };
export const getcomment = async (getrecipeId,body) => {return await api.get(`${baseUrl}/comments/${getrecipeId}`, body); };