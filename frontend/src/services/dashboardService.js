import api from "../api/axios";

/**
 * Fetch dashboard data from the backend.
 */
export async function getDashboardData() {
    const response = await api.get("/dashboard");
    return response.data;
}