import axios from "axios";

export const api = axios.create({
    baseURL: "https://previsao-ondas.herokuapp.com",
});

export async function searchStates(): Promise<State[]> {
    const result = await api.get<{ estados: State[] }>('/litoral/estados')
    return result.data.estados
};

export async function searchCities(abreviatura: string): Promise<City[]> {

    const result = await api.get<{ estado: { cidades: City[] } }>(`/litoral/estado/${abreviatura}`)
    return result.data.estado.cidades
};

export async function searchDays(id: string): Promise<Days[]> {

    const result = await api.get<{ dias: Days[] }>(`/onda/cidade/${id}`)
    return result.data.dias
};