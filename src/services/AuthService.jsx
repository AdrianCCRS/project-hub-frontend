import { handleError } from "../helpers/ErrorHandler";
import {api} from "./axiosConfig";

export const loginAPI = async (email, password) => {
    try {
        const data = await api.post("/auth/login", {
            email: email,
            password: password,
        });
        return data;
    } catch (error){
        handleError(error);
    } 
}

export const registerAPI = async (firstName, lastName, email, password, program, description) => {
    try {
        const data = await api.post("/auth/register", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            program: program,
            description: description
        });
        return data;
    } catch (error){
        handleError(error);
    }
}