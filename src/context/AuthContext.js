import { createContext, useContext, useState } from "react";
import { executeJWTAuthService } from '../api/AuthApiService';
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function AuthProvider( {children} ) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [token, setToken] = useState(null);

    const login = async (username, password) => {
        try {
            const response = await executeJWTAuthService(username, password);

            if(response.status == 200){
                const jwtToken = "Bearer " + response.data.token;
                setAuthenticated(true);
                setUsername(username);
                setToken(jwtToken);

                apiClient.interceptors.request.use(
                    config => {
                        config.headers.Authorization = jwtToken;
                        return config;
                    }
                )
                return true;
            } else {
                logout();
                return false;
            }
        } catch(error){
            logout();
            return false;
        }
    }

    const logout = () => {
        setAuthenticated(false);
        setUsername(null);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, username, token}}>
            { children }
        </AuthContext.Provider>

    )
}

export default AuthProvider;