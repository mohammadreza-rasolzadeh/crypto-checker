import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getTrendingCoins,
    getNftsList,
    getNfts,
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

const initialState = {
    trendingCoin: [],
    nftsList: [],
    nfts: [],
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
            });
    },
});

export default cryptoSlice.reducer;
export const selectTrendingCoins = (state) =>
    state.cryptoCurrency.trendingCoin.coins;