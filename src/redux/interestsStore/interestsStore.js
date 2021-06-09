import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    interests: []
};

const InterestsStore = createSlice({
    name: 'interests',
    initialState: initialState,
    reducers: {
        setInterests(state, action) {
            state.interests = action.payload;
        },
        updateInterests(state, action){
            state.interests = [...state.interests, action.payload];
        }
    }
});

export const {
    setInterests,
    updateInterests
} = InterestsStore.actions;

export const interestsReducer = InterestsStore.reducer;

export default InterestsStore;