//this needs to be replaced by env variable.
const backendApi = "https://localhost:7284/api/v1";
export default class BaseAPIs {
  baseUrl: string;
  constructor() {
    this.baseUrl = backendApi || "https://localhost:7284/api/v1";
  }
}
