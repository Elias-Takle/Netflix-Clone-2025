import axios from "axios";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})
export default instance;


// https://api.themoviedb.org/3/discover/tv?api_key=0460a88962ef7baed3d6d2b4c47e0315&with_networks=213