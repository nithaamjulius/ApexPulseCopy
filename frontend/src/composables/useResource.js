import { ref, onMounted } from "vue";
import { useApi } from "./useApi";

export function useResource(fetchFunction) {
    const data = ref(null);

    const {
        loading,
        error,
        execute
    } = useApi();

    async function refresh() {
        data.value = await execute(fetchFunction);
    }

    onMounted(refresh);

    return {
        data,
        loading,
        error,
        refresh,
    };
}