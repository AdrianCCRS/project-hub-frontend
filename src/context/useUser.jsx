import React, {createContext, useEffect, useState} from "react";
import { getAllUsersAPI, getUserById, updateUser } from "../services/UserService";
import { toast } from "react-toastify";

const UserContext = createContext();

export const UserContextProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [allUsers, setAllUsers] = useState(null);
    const [isReady, setIsReady] = useState(false);
    useEffect(() =>{
        getUser(localStorage.getItem("userId"));
    }, []);
    
    
    const getUser = async (userId) => {
        await getUserById(userId).then((res) =>{
            if (res){
                setUser(res.data);
                setIsReady(true);
            }
        }).catch(e => toast.warning("Ha ocurrido un error en el servidor"));
    }

    const updateUserData = async (user) => {
        await updateUser(user).then((res) =>{
            if (res){
                setUser(res.data);
                toast.success("Usuario actualizado correctamente");
            }
        }).catch(e => toast.warning("Ha ocurrido un error en el servidor"));
    }

    const getAllUsers = async () =>{
        await getAllUsersAPI().then((res) => {
            setAllUsers(res.data)
        }).catch(e => toast.warning("Ha ocurrido un error en el servidor al cargar todos los usuarios"))
    }

    return(
        <UserContext.Provider value={{user, isReady, updateUserData, getAllUsers, allUsers}}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser = () => {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserContextProvider");
    }
    return context;
}