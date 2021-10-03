import createAxiosClient from "../http-client/http-client.axios";
import env from "../../environment";
import { HttpClientInterface } from "../../interfaces/interface.http";
import { CatImageResponseInterface } from "../../interfaces/interface.api";

const catHttpClient = createAxiosClient({
    baseURL: env.API_URL_CAT,
    defaultHeaders: {
        "x-api-key": env.API_KEY_CAT
    }
});

const createCatAPI = (client: HttpClientInterface) => ({
    images: {
        search: (limit = 10) => client.get<CatImageResponseInterface[]>("/images/search", { params: { limit } })
    }
});

const catApi = createCatAPI(catHttpClient);

export default catApi;
