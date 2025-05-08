import { handleError } from "../helpers/ErrorHandler";
import {api} from "./axiosConfig";

export const createGroupAPI = async (name, leaderId) => {
    try {
        const data = await api.post("/api/group", {
            name: name,
            leaderId: leaderId,
        });
        return data;
    } catch (error){
        handleError(error);
    } 
}

export const addMembers = async (members) => {
    try {
        const data = await api.post("/api/group-members/addMultiple", {
            members: members,
        });
        return data;
    } catch (error){
        handleError(error);
    }
}