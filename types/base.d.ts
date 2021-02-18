import { API as BaseAPI } from "yonius";

export declare class API extends BaseAPI {
    constructor(kwargs?: object);
    load(): Promise<void>;
    render(template: string, payload: JSON);
    info(): Promise<object>;
}
