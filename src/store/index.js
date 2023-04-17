import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import coinReducer, { fetchTrendingCoins } from "../reducers/coinSlice";
import { coinsApi, useGetTrendingCoinsQuery } from "../reducers/coinsApi";

export const store = configureStore({
    reducer: {
        trendingCoins: coinReducer,
        [coinsApi.reducerPath]: coinsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(coinsApi.middleware),
});

store.dispatch(fetchTrendingCoins());
// store.dispatch(useGetTrendingCoinsQuery)