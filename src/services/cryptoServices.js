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