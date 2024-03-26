import api, { baseUrl } from "../config/axios";


export const getrecipes = async (body) => {return await api.get(`${baseUrl}/get_recipes`, body); };
export const createrecipes = async (body) => {return await api.post(`${baseUrl}/recipes`, body); };
export const updaterecipe = async (recipeId,body) => api.put(`${baseUrl}/recipes/${recipeId}`,body);
export const deleterecipe = async (recipeId) => api.delete(`${baseUrl}/recipes/${recipeId}`);
export const searchrecipe = async (title) => api.post(`${baseUrl}/recipes/search?title=${title}`);