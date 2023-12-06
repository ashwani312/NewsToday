import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fav: []
}

export const favSlice = createSlice({
    name: "fav",
    initialState,
    reducers: {
        addToFavList: (state, action) => {
            const item = state.fav.find(item => item?.title === action.payload.title);
            if (item) {
                return;
            } else {
                state.fav.push(action.payload);
            }
        },
        removeFavItem: (state, action) => {
            state.fav = state.fav.filter(item => item.title !== action.payload);
        },
        resetFav: (state) => {
            state.fav = [];
        }
    }
})
export const { addToFavList, removeFavItem, resetFav } = favSlice.actions;
export default favSlice.reducer