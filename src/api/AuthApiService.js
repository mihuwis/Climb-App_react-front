import { apiClient } from "./ApiClient";

export const executeJWTAuthService = (username, password) => apiClient.post(`/authenticate`, 
    { username, password }
)