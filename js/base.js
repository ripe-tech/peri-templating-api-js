import { API as BaseAPI, mix, load, conf } from "yonius";

const TEMPLATING_SERVICE_URL = "http://localhost:3000/";

export class API extends mix(BaseAPI) {
    constructor(kwargs = {}) {
        super(kwargs);
        this.baseUrl = conf("TEMPLATING_SERVICE_URL", TEMPLATING_SERVICE_URL);
        this.token = conf("TEMPLATING_SERVICE_TOKEN", null);
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
