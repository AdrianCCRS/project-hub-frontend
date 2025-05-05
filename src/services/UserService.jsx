import {api} from './axiosConfig';
import { handleError } from "../helpers/ErrorHandler";

export const getUserById = async (id) => {
    try {
        const data = await api.get(`/api/users/${id}`);
        return data;
    } catch (error){
        handleError(error);
    } 
}

export const getAllUsers = async () => {
    try {
        const data = await api.get("/api/users/");
        return data;
    } catch (error){
        handleError(error);
    } 
}

export const createUser = async (user) => {
    try {
        const data = await api.post("/api/users/", user);
        return data;
    } catch (error){
        handleError(error);
    } 
}

export const updateUser = async (user) => {
    try {
        const data = await api.put(`/api/users`, user);
        return data;
    } catch (error){
        handleError(error);
    } 
}

//delete user not implemented