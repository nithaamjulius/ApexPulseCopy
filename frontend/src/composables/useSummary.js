import { ref, onMounted } from "vue";
import { useApi } from "./useApi";
import { getSummary } from "../services/summaryService";

export function useSummary() {

    const summary = ref(null);

    const {
        loading,
        error,
        execute
    } = useApi();

    async function fetchSummary() {
        summary.value = await execute(getSummary);
    }

    onMounted(fetchSummary);

    return {
        summary,
        loading,
        error,
        fetchSummary,
    };
}