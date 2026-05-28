import axios from "axios";

/* Récupérer les news */
const snapiAPI = "https://api.spaceflightnewsapi.net/v4/articles/"

export const snapiCustomFetch = axios.create({
    baseURL: snapiAPI
})

/* Récupérer les Hubble images */
const datastroAPI = "https://www.datastro.eu/api/explore/v2.1/catalog/datasets/nasahubble/records"

export const datastroCustomFetch = axios.create({
    baseURL: datastroAPI
})