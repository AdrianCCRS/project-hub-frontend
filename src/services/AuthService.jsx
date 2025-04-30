import axios from "axios";
const api = "http://localhost:8080";
import { handleError } from "../helpers/ErrorHandler";

export const loginAPI = async (email, password) => {
    try {
        const data = await axios.post(api + "/auth/login", {
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
        const data = await axios.post(api + "/auth/register", {
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