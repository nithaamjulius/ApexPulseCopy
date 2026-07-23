import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

/*
|--------------------------------------------------------------------------
| Request Interceptor
|--------------------------------------------------------------------------
| Runs before every request is sent to the backend.
*/

api.interceptors.request.use(
    (config) => {
        console.log(`➡️ ${config.method?.toUpperCase()} ${config.url}`);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/*
|--------------------------------------------------------------------------
| Response Interceptor
|--------------------------------------------------------------------------
| Runs after every response is received.
*/

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {

        if (error.response) {

            switch (error.response.status) {

                case 400:
                    console.error("Bad Request");
                    break;

                case 401:
                    console.error("Unauthorized");
                    break;

                case 403:
                    console.error("Forbidden");
                    break;

                case 404:
                    console.error("Resource Not Found");
                    break;

                case 500:
                    console.error("Internal Server Error");
                    break;

                default:
                    console.error(error.response.data);
            }

        } else {

            console.error("Unable to connect to the backend.");

        }

        return Promise.reject(error);
    }
);

export default api;