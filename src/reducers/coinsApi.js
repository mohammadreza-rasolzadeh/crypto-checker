import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
    endpoints: (builder) => ({
        getTrendingCoins: builder.query({
            query: () => "/search/trending",
        }),
        getNftsList: builder.query({
            query: () => "/nfts/list",
        }),
        getNfts: builder.query({
            query: (nftsId) => `/nfts/${nftsId}`,
        }),
        getCoins: builder.query({
            query: (currency = "usd") =>
                `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`,

        }),
    }),
});

export const {
    useGetTrendingCoinsQuery,
    useGetNftsListQuery,
    useGetNftsQuery,
    useGetCoinsQuery,
} = cryptoApi;