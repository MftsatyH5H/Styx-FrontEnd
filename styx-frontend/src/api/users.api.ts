import axios from "axios";
import BaseAPIs from "./base.api";

export default class usersApi {
    private baseUrl: string
    
    constructor() {
        const baseApi = new BaseAPIs();
        this.baseUrl = baseApi.baseUrl;
    }

    getUsers = (page:number) => { return axios.get(`${this.baseUrl}/users?page=${page}`); }
}