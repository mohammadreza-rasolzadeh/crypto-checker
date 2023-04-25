import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getTrendingCoins,
    getNftsList,
    getNfts,
    getCoinList,
    getExchangeCoin,
    getExchanges,
} from "../services/cryptoServices";

export const fetchTrendingCoins = createAsyncThunk(
    "/coins/fetchTrendingCoins",
    async() => {
        const response = await getTrendingCoins();
        return response.data;
    }
);

export const fetchNftsList = createAsyncThunk(
    "/nfts/fetchNftsList",
    async() => {
        const response = await getNftsList();
        return response.data;
    }
);

export const fetchNfts = createAsyncThunk("/nfts/fetchNfts", async(nftsId) => {
    const response = await getNfts(nftsId);
    return response.data;
});

export const fetchCoinList = createAsyncThunk(
    "/coins/fetchCoinList",
    async() => {
        const response = await getCoinList();
        return response.data;
    }
);

export const fetchExchanges = createAsyncThunk(
    "/exchanges/fetchExchanges",
    async() => {
        const response = await getExchanges();
        return response.data;
    }
);

export const fetchExchangeCoin = createAsyncThunk(
    "/exchangeCoin/fetchExchangeCoin",
    async(coinId) => {
        const response = await getExchangeCoin(coinId);
        return response.data;
    }
);

const initialState = {
    trendingCoin: [],
    nftsList: [],
    nfts: [],
    coins: [],
    exchanges: [],
    exchangeCoin: [],
    status: null,
};

export const cryptoSlice = createSlice({
    name: "crypto",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrendingCoins.pending, (state, _) => {
                state.status = "pending";
            })
            .addCase(fetchTrendingCoins.fulfilled, (state, action) => {
                state.status = "success";
                state.trendingCoin = action.payload;
            })
            .addCase(fetchTrendingCoins.rejected, (state, _) => {
                state.status = "rejected";
            })
            .addCase(fetchNftsList.pending, (state, _) => {
                state.status = "pending";
            })
            .addCase(fetchNftsList.fulfilled, (state, action) => {
                state.status = "success";
                console.log(state.nftsList);
                state.nftsList = action.payload;
            })
            .addCase(fetchNftsList.rejected, (state, _) => {
                state.status = "rejected";
            })
            .addCase(fetchNfts.pending, (state, _) => {
                state.status = "pending";
            })
            .addCase(fetchNfts.fulfilled, (state, action) => {
                state.status = "success";
                state.nfts = action.payload;
            })
            .addCase(fetchNfts.rejected, (state, _) => {
                state.status = "rejected";
            })
            .addCase(fetchCoinList.pending, (state, _) => {
                state.status = "pending";
            })
            .addCase(fetchCoinList.fulfilled, (state, action) => {
                state.status = "success";
                state.coins = action.payload;
            })
            .addCase(fetchCoinList.rejected, (state, _) => {
                state.status = "rejected";
            })
            .addCase(fetchExchanges.pending, (state, _) => {
                state.status = "pending";
            })
            .addCase(fetchExchanges.fulfilled, (state, action) => {
                state.status = "success";
                state.exchanges = action.payload;
            })
            .addCase(fetchExchanges.rejected, (state, _) => {
                state.status = "rejected";
            })
            .addCase(fetchExchangeCoin.pending, (state, _) => {
                state.status = "pending";
            })
            .addCase(fetchExchangeCoin.fulfilled, (state, action) => {
                state.status = "success";
                state.exchangeCoin = action.payload;
            })
            .addCase(fetchExchangeCoin.rejected, (state, _) => {
                state.status = "rejected";
            })
    },
});

export default cryptoSlice.reducer;
export const selectTrendingCoins = (state) =>
    state.cryptoCurrency.trendingCoin.coins;

// export const selectCoinList = (state) => state.cryptoCurrency.coins;