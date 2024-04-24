import axios from "axios";
import BaseAPIs from "./base.api";

export default class currentUser {
    private baseUrl: string
    
    constructor() {
        const baseApi = new BaseAPIs();
        this.baseUrl = baseApi.baseUrl;
    }

    login = (nid: string, password: string) => { return axios.post(`${this.baseUrl}/auth/login?nid=${nid}&password=${password}`); }

    requestReset = (email: string) => { return axios.post(`${this.baseUrl}/auth/requestReset?email=${email}`); }

    changePassword = (newPassword: string) => { return axios.post(`${this.baseUrl}/auth/changePassword?newPassword=${newPassword}`); }

}