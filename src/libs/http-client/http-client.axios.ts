import Axios from "axios";
import { createHttpClient } from "../../interfaces/interface.http";

const createAxiosClient: createHttpClient = opts => {
    const instance = Axios.create({ baseURL: opts?.baseURL, headers: opts?.defaultHeaders });
    instance.interceptors.response.use(res => res.data);
    return instance;
};

export default createAxiosClient;
