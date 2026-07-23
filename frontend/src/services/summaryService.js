import api from "../api/axios";

export async function getSummary() {
    const response = await api.get("/api/summary");
    return response.data;
}