import React, { createContext, useEffect, useState} from "react";
import { loginAPI, registerAPI } from "../services/AuthService";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() =>{
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if (user && token) {
            setUser(userId);
            setToken(token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        setIsReady(true);
    }, []);

    const registerUser = async (firstName, lastName, email, password, program, description) => {
        await registerAPI(firstName, lastName, email, password, program, description).then((res) =>{
            if (res){
                localStorage.setItem("userId", res.data.userId);
                localStorage.setItem("token", res.data.token);

                //Aqui puedo armar un objeto con el usuario y su informacion
                setToken(res?.data.token);
                setUser(res?.data.userId);
                toast.success("Usuario registrado correctamente");
                navigate("/projects");
            }
        }).catch(e => toast.warning("Ha ocurrido un error en el servidor"));
    };

    const loginUser = async ( email, password) => {
        await loginAPI(email, password).then((res) =>{
            if (res){
                localStorage.setItem("userId", res.data.userId);
                localStorage.setItem("token", res.data.token);

                //Aqui puedo armar un objeto con el usuario y su informacion
                setToken(res?.data.token);
                setUser(res?.data.userId);
                toast.success("Bienvenido a ProjectHub");
                navigate("/projects");
            }
        }).catch(e => toast.warning("Ha ocurrido un error en el servidor"));
    };

    const isLoggedIn = () => {
        return !!token;
    }

    const logout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{user, token, isLoggedIn, registerUser, loginUser, logout}}>
            {isReady ? children : null}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);