import api from "../api/axios";

/**
 * Get system logs.
 */
export async function getLogs(level = null) {

    const response = await api.get("/api/logs", {
        params: level ? { level } : {},
    });

    return response.data;
}