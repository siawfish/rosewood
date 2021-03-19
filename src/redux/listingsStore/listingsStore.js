import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    listings: undefined
};

const ListingsStore = createSlice({
    name: 'listings',
    initialState: initialState,
    reducers: {
        setListings(state, action) {
            state.listings = action.payload;
        },
        updateListings(state, action){
            state.listings = [...state.listings, action.payload];
        }
    }
});

export const {
    setListings,
    updateListings
} = ListingsStore.actions;

export const listingsReducer = ListingsStore.reducer;

export default ListingsStore;
