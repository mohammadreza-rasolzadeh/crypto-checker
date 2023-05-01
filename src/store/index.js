import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import cryptoReducer, {
    fetchCategoriesList,
    fetchCoinList,
    fetchExchanges,
    fetchGlobalCryptoCurrencyEecentralized,
    fetchTrendingCoins,
} from "../reducers/coinSlice";
import { cryptoApi } from "../reducers/coinsApi";

export const store = configureStore({
    reducer: {
        cryptoCurrency: cryptoReducer,
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware),
});

store.dispatch(fetchTrendingCoins());
store.dispatch(fetchCoinList());
store.dispatch(fetchCategoriesList());
store.dispatch(fetchGlobalCryptoCurrencyEecentralized());
store.dispatch(fetchExchanges());