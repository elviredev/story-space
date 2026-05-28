import axios from "axios";

const snapiAPI = "https://api.spaceflightnewsapi.net/v4/articles/"
const datastroAPI = "https://www.datastro.eu/api/explore/v2.1/catalog/datasets/nasahubble/records"
const nasaAPI = "https://api.nasa.gov/planetary/apod"

/* Récupérer les news */
export const snapiCustomFetch = axios.create({
    baseURL: snapiAPI
})


/* Récupérer les Hubble images */
export const datastroCustomFetch = axios.create({
    baseURL: datastroAPI
})


/* Récupérer les infos Nasa astronomy picture of the day  */
export const nasaCustomFetch = axios.create({
    baseURL: nasaAPI,
    params: { api_key: import.meta.env.VITE_API_KEY_NASA }
})