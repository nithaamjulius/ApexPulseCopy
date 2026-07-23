import { computed } from "vue";

import { useSummary } from "./useSummary";
import { useServers } from "./useServers";
import { useLogs } from "./useLogs";

export function useDashboard() {
    const summaryResource = useSummary();
    const serverResource = useServers();
    const logResource = useLogs();

    const loading = computed(() =>
        summaryResource.loading.value ||
        serverResource.loading.value ||
        logResource.loading.value
    );

    const error = computed(() =>
        summaryResource.error.value ||
        serverResource.error.value ||
        logResource.error.value
    );

    async function refresh() {
        await Promise.all([
            summaryResource.refresh(),
            serverResource.refresh(),
            logResource.refresh(),
        ]);
    }

    return {
        summary: summaryResource.summary,
        servers: serverResource.servers,
        logs: logResource.logs,

        loading,
        error,

        refresh,
    };
}