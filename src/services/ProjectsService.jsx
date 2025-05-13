import {api} from './axiosConfig';
import { handleError } from "../helpers/ErrorHandler";

export const getAllProjectsAPI = async () => {
    try {
        const data = await api.get("/api/projects");
        return data;
    } catch (error){
        handleError(error);
    } 
}

export const getProjectByUserIdAPI = async (userId) => {
    try {
        const data = await api.get("/api/projects/user/" + userId);
        return data;
    } catch (error){
        handleError(error);
    } 
}

export const createProjectAPI = async (project) => {
    try {
        return await api.post("/api/projects", project);
    } catch (error){
        handleError(error);
    }
}

export const updateProjectAPI = async (project) => {
    try {
        return await api.put("/api/projects", project);
    } catch (error){
        handleError(error);
    }
}