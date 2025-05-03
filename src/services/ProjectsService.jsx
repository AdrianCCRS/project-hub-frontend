import axios from 'axios';
import {api} from './axiosConfig';
import { handleError } from "../helpers/ErrorHandler";

export const getAllProjectsAPI = async () => {
    try {
        const data = await api.get("/projects");
        return data;
    } catch (error){
        handleError(error);
    } 
}

export const getProjectByUserIdAPI = async (userId) => {
    try {
        const data = await api.get("/projects/user/" + userId);
        return data;
    } catch (error){
        handleError(error);
    } 
}