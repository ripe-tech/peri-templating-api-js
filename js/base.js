import { API as BaseAPI, mix, load, conf } from "yonius";
import { OrderAPI } from "./order";
import { ReviewAPI } from "./review";

const BASE_URL = "https://peri-templating-now.platforme.com/";

export class API extends mix(BaseAPI).with(OrderAPI, ReviewAPI) {
    constructor(kwargs = {}) {
        super(kwargs);
        this.baseUrl = conf("PERI_TEMPLATING_BASE_URL", BASE_URL);
        this.token = conf("PERI_TEMPLATING_TOKEN", null);
        this.baseUrl = kwargs.baseUrl === undefined ? this.baseUrl : kwargs.baseUrl;
        this.token = kwargs.token === undefined ? this.token : kwargs.token;
    }

    static async load() {
        await load();
    }

    async build(method, url, options = {}) {
        await super.build(method, url, options);
        options.headers = options.params !== undefined ? options.headers : {};
        options.kwargs = options.kwargs !== undefined ? options.kwargs : {};
        const auth = options.kwargs.auth === undefined ? true : options.kwargs.auth;
        delete options.kwargs.auth;
        if (auth) {
            options.headers.Authorization = `Bearer ${this.token}`;
        }
    }

    async info() {}
}

export default API;
