import { ref } from "vue";

export function useApi() {
    const loading = ref(false);
    const error = ref(null);

    async function execute(apiCall) {
        loading.value = true;
        error.value = null;

        try {
            return await apiCall();
        } catch (err) {
            error.value =
                err.response?.data?.message ||
                err.message ||
                "Something went wrong.";

            throw err;
        } finally {
            loading.value = false;
        }
    }

    return {
        loading,
        error,
        execute,
    };
}