import { apiClient } from "./ApiClient";

export const getAllAreasAndRoutesApi = () => apiClient.get('/v1/climbing-areas');

export const getAreaByIdApi = (id) => apiClient.get(`/v1/climbing-areas/${id}`);

export const getAllCountriesNamesApi = () => apiClient.get(`v1/climbing-areas/countries`);

export const getAllClimbingAreasInCountryApi = (country) => apiClient.get(`v1/climbing-areas/countries/${country}`);



export const getAllClimbingLinesApi = () => apiClient.get(`v1/climbing-lines`);

export const getClimbingLineByNameApi = () => apiClient.get(`v1/climbing-lines`);
