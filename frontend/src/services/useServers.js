import { computed } from "vue";
import { useResource } from "./useResource";
import { getServers } from "../services/serverService";

export function useServers() {

    const resource = useResource(getServers);

    return {
        servers: computed(() => resource.data.value),
        loading: resource.loading,
        error: resource.error,
        refresh: resource.refresh,
    };

}