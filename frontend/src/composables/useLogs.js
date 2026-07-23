import { computed } from "vue";
import { useResource } from "./useResource";
import { getLogs } from "../services/logService";

export function useLogs() {

    const resource = useResource(getLogs);

    return {
        logs: computed(() => resource.data.value),
        loading: resource.loading,
        error: resource.error,
        refresh: resource.refresh,
    };

}