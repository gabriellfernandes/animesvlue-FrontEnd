import axios from "axios";

const ApiIAnime = axios.create({
    baseURL: "https://gabriellf.herokuapp.com/"
})

export default ApiIAnime;