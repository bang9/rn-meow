export interface RequestConfigInterface {
    params?: Record<string, any>;
    headers?: Record<string, any>;
}

export interface HttpClientInterface {
    get<T = any>(url: string, config?: RequestConfigInterface): Promise<T>;
    options<T = any>(url: string, config?: RequestConfigInterface): Promise<T>;
    delete<T = any>(url: string, config?: RequestConfigInterface): Promise<T>;
    post<T = any>(url: string, data?: any, config?: RequestConfigInterface): Promise<T>;
    put<T = any>(url: string, data?: any, config?: RequestConfigInterface): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: RequestConfigInterface): Promise<T>;
}

export type HttpClientOptions = {
    baseURL?: string;
    defaultHeaders?: RequestConfigInterface["headers"];
};
export interface createHttpClient {
    (opts?: HttpClientOptions): HttpClientInterface;
}
