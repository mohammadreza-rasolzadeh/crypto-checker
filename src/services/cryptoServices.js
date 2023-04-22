import axios from "axios";

const SERVER_URL = "https://api.coingecko.com/api/v3";

export const getTrendingCoins = () => {
    const url = `${SERVER_URL}/search/trending`;
    return axios.get(url);
};

export const getNftsList = () => {
    const url = `${SERVER_URL}/nfts/list`;
    return axios.get(url);
};

export const getNfts = (nftsId) => {
    const url = `${SERVER_URL}/nfts/${nftsId}`;
    return axios.get(url);
};

export const getCoinList = (currency = "usd") => {
    const url = `${SERVER_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;
    return axios.get(url);
};