import api from "../api/axios";

/**
 * Get all servers.
 */
export async function getServers(status = null) {

    const response = await api.get("/api/servers", {
        params: status ? { status } : {},
    });

    return response.data;
}