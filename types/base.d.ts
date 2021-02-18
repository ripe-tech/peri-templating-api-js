import { API as BaseAPI } from "yonius";

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


export declare class API extends BaseAPI {
    constructor(kwargs?: object);
    load(): Promise<void>;
    render(template: string, payload: JSON);
    info(): Promise<object>;
}
