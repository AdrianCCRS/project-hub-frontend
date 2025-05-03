import React, {createContext, useEffect, useState} from "react";
import { getAllProjectsAPI, getProjectByUserIdAPI } from "../services/ProjectsService";
import { toast } from "react-toastify";

const ProjectsContext = createContext();

export const ProjectsContextProvider = ({children}) =>{
    const [projects, setProjects] = useState([]);
    const [userProjects, setUserProjects] = useState([]);
    const [isReady, setIsReady] = useState(false);

    useEffect(() =>{
        getAllProjects();
        getProjectsByUserId(localStorage.getItem("userId"));
        setIsReady(true);
    }, []);

    const getAllProjects = async () => {
        await getAllProjectsAPI().then((res) =>{
            if (res){
                setProjects(res.data);
            }
        }).catch(e => toast.warning("Ha ocurrido un error en el servidor"));
    };

    const getProjectsByUserId = async (userId) => {
        await getProjectByUserIdAPI(userId).then((res) =>{
            if (res){
                setUserProjects(res.data);
            }
        }).catch(e => toast.warning("Ha ocurrido un error en el servidor"));
    }

    return(
        <ProjectsContext.Provider value={{projects, userProjects, isReady}}>
            {children}
        </ProjectsContext.Provider>
    )
}
export const useProjects = () => {
    const context = React.useContext(ProjectsContext);
    if (!context) {
        throw new Error("useProjects must be used within a ProjectsContextProvider");
    }
    return context;
}