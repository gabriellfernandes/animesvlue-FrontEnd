import axios from "axios";

const host = "http://localhost:3000/"

const Api = axios.create({
    baseURL: host
})

export default Api;