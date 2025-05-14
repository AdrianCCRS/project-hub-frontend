import {handleError} from "../helpers/ErrorHandler";
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
        return await api.put("/api/groups", {
            name: name,
            leaderId: leaderId,
            id: id
        });
    } catch (error){
        handleError(error);
    }
}

export const getGroupsByLeaderAPI = async (leaderId) => {
    try {
        return await api.get(`/api/groups/editable/${leaderId}`);
    } catch (error){
        handleError(error);
    }
}

export const getMembersFromGroupAPI = async (groupId) => {
    try {
        return await api.get(`/api/group-members/group/${groupId}`);
    } catch (error){
        handleError(error);
    }
}

export const deleteMembersAPI = async (members, groupId) => {
    try {
        return await api.delete(`/api/group-members/deleteMultiple/group/${groupId}`, {
            data: members
        });
    } catch (error) {
        handleError(error);
    }
};
