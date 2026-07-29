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
    const result = await execute(fetchFunction);

    if (result !== null) {
        data.value = result;
    }
}

    onMounted(refresh);

    return {
        data,
        loading,
        error,
        refresh,
    };
}