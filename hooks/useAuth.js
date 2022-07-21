import { useRouter } from "next/router";
import { useContext, createContext, useState } from "react";
import { useEffect } from "react";
import API from "../services/api";


const AuthContext = createContext();

// provider
export const AuthContextProvider = ({ children }) => {

    let values = getContextValues();

    return (
        <AuthContext.Provider value={values}>
            {
                children
            }
        </AuthContext.Provider>
    )
}

// consumer
export const useAuth = () => {
    return useContext(AuthContext);
}

// values
const getContextValues = () => {

    // states
    let [isAuthenticated, setIsAuthenticated] = useState(null);
    let router = useRouter();

    async function login(email, password) {
        return API.post("/api/admin/login", { email, password }).then(response => {
            const { data } = response;
            console.log(data.token)
            localStorage.setItem("token", data.token);
            return response;
        })
    }
    async function checkLogedIn() {
        try {
            const { data } = await API.get("/api/admin/login",{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            setIsAuthenticated(data.logedin);
        } catch (e) {
            setIsAuthenticated(false);
        }
    }

    useEffect(()=>{
        checkLogedIn();
    }, [])

    return {
        login,
        checkLogedIn,
        isAuthenticated,
    }
}