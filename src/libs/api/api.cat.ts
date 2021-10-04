import createAxiosClient from "../http-client/http-client.axios";
import env from "../../environment";
import { HTTPClientInterface } from "../../interfaces/interface.http";
import { CatImageResponseInterface } from "../../interfaces/interface.api";

const catHTTPClient = createAxiosClient({
    baseURL: env.API_URL_CAT,
    defaultHeaders: {
        "x-api-key": env.API_KEY_CAT
    }
});

const createCatAPI = (client: HTTPClientInterface) => ({
    images: {
        search: (limit = 10) => client.get<CatImageResponseInterface[]>("/images/search", { params: { limit } })
    }
});

const catApi = createCatAPI(catHTTPClient);

export default catApi;
