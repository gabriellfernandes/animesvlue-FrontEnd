import axios from "axios";

const ApiIAnime = axios.create({
    baseURL: "https://appanimeplus.tk/",
    responseType:"json"
})

export default ApiIAnime;