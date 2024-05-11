import axios from "axios";

const api = axios.create({
    baseURL: "https://node-players.vercel.app",
});

export default api;
