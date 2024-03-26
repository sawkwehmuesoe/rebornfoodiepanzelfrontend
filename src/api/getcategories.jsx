import api, { baseUrl } from "../config/axios";

export const getcategory = async (body) => {return await api.get(`${baseUrl}/categories`, body); };