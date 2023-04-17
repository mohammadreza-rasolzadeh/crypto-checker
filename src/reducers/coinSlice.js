import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendingCoins } from "../services/cryptoServices";

export const fetchTrendingCoins = createAsyncThunk(
    "/coins/fetchTrendingCoins",
    async() => {
        const response = await getTrendingCoins();
        return response.data;
    }
);

const initialState = {
    trendingCoin: [],
    status: null,
};

export const coinSlice = createSlice({
    name: "trendingCoin",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrendingCoins.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchTrendingCoins.fulfilled, (state, action) => {
                state.status = "success";
                state.trendingCoin = action.payload;
            })
            .addCase(fetchTrendingCoins.rejected, (state, action) => {
                state.status = "rejected";
            });
    },
});

export default coinSlice.reducer;
export const selectTrendingCoins = (state) => state.trendingCoins.trendingCoin.coins;