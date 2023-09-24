import axios from "axios";

const OMDbAPI = axios.create({
    baseURL: `http://www.omdbapi.com/`
})

export default OMDbAPI;