import axios from "axios";

const api = axios.create({
    baseURL: process.env.MIX_REACT_APP_URL
});

export default api;
