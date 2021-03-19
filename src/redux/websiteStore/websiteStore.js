import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    address: undefined
};

const websiteStore = createSlice({
    name: 'website',
    initialState: initialState,
    reducers: {
        setAddress(state, action) {
            state.address = action.payload;
        }
    }
});

export const {
    setAddress
} = websiteStore.actions;

export const websiteReducer = websiteStore.reducer;

export default websiteStore;
