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
    }),
});

export const {
    useGetTrendingCoinsQuery,
    useGetNftsListQuery,
    useGetNftsQuery,
} = cryptoApi;