import axios from "axios";

const host = "http://localhost:3000/"

const ApiIUser = axios.create({
    baseURL: host
})

export default ApiIUser;