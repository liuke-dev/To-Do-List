import { HttpClient } from "./http-client";

class Apis extends HttpClient {
  constructor() {
    super("http://localhost:8080");

    this._initializeRequestInterceptor();
  }

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this._handleRequest);
  };

  _handleRequest = (config) => {
    config.headers["Authorization"] = "todoList";
    return config;
  };

  getList = async () => this.instance.get("/todoItems");
}

export default new Apis();
