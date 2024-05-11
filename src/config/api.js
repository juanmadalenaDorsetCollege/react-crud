import axios from "axios";

const api = axios.create({
    baseURL: "https://top-players-mongo.zeabur.app",
});

export default api;
