import { apiClient } from "./ApiClient";

export const getAllAreasAndRoutesApi = () => apiClient.get('/v1/climbing-areas');

export const getAreaByIdApi = (id) => apiClient.get(`/v1/climbing-areas/${id}`);