import { handleError } from "../helpers/ErrorHandler";
import {api} from "./axiosConfig";

export const createGroupAPI = async (name, leaderId) => {
    try {
        const data = await api.post("/api/groups", {
            name: name,
            leaderId: leaderId,
        });
        return data;
    } catch (error){
        handleError(error);
    } 
}

export const addMembersAPI = async (members) => {
    try {
        const data = await api.post("/api/group-members/addMultiple", members);
        return data;
    } catch (error){
        handleError(error);
    }
}

export const updateGroupAPI = async (name, leaderId, id) => {
    try {
        const data = await api.put("/api/groups", {
            name: name,
            leaderId: leaderId,
            id: id
        });
        return data;
    } catch (error){
        handleError(error);
    }
}

export const getGroupsByLeaderAPI = async (leaderId) => {
    try {
        const data = await api.get(`/api/groups/editable/${leaderId}`);
        return data;
    } catch (error){
        handleError(error);
    }
}

export const getMembersFromGroupAPI = async (groupId) => {
    try {
        const data = await api.get(`/api/group-members/group/${groupId}`);
        return data;
    } catch (error){
        handleError(error);
    }
}