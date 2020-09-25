import { OrderAPI } from "./order";
import { ReviewAPI } from "./review";

export interface API extends OrderAPI, ReviewAPI {}

export declare class API implements API {
    constructor(kwargs?: object);
    load(): Promise<void>;
    info(): Promise<object>;
}
