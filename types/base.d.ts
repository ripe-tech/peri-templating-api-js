export type BuildOptions = {
    headers?: Record<string, unknown>;
    kwargs?: Record<string, unknown>;
    params?: Record<string, unknown>;
    handle?: boolean;
    data?: object,
    dataJ?: JSON,
    dataM?: object,
}

export enum BuildMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    OPTIONS = "OPTIONS"
}

export declare class API implements API {
    constructor(kwargs?: object);
    load(): Promise<void>;
    build(method: BuildMethod, url: string, options?: BuildOptions);
    render(template: string, payload: JSON);
    info(): Promise<object>;
}
