import axios from 'axios';

const API_KEY = '31e3edcb27mshe081dfd81005b3fp1fb0d8jsn1bfe3053cf4a';
const BASE_URL = 'https://airbnb13.p.rapidapi.com/';
const API_HOST = "airbnb13.p.rapidapi.com"

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
    },
});

export const fetchHotels = (searchCriteria) => {
    const {
        location,
        checkin,
        checkout,
        adults,
        children,
        infants,
        pets,
        page,
        currency
    } = searchCriteria;
    return api.get('search-location', {
        params: {
            location,
            checkin,
            checkout,
            adults,
            children,
            infants,
            pets,
            page,
            currency,
        },
    });
};