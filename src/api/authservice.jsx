import api from '../config/axios'
import { baseUrl } from '../config/axios';

export const register = async (body) => {return await api.post(`${baseUrl}/register`, body); };
export const login = async (body) => {return await api.post(`${baseUrl}/login`, body); };
export const logout = async (body) => {return await api.post(`${baseUrl}/login`, body); };

