import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import cryptoReducer, { fetchTrendingCoins } from "../reducers/coinSlice";
import { cryptoApi, useGetTrendingCoinsQuery } from "../reducers/coinsApi";

export const store = configureStore({
    reducer: {
        cryptoCurrency: cryptoReducer,
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware),
});

// store.dispatch(fetchTrendingCoins());
// store.dispatch(useGetTrendingCoinsQuery)