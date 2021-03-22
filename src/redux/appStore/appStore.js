import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userType: undefined,
    isAuthenticated: false,
    profile: undefined,
    ip:undefined
};

const AppStore = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setUserType(state, action) {
            state.userType = action.payload;
        },
        setIsAuthenticated(state, action) {
            state.isAuthenticated = action.payload;
        },
        setUserProfile(state, action) {
            state.profile = action.payload;
        },
        setIP(state, action) {
            state.ip = action.payload;
        },
        resetAppStore() {
            return initialState;
        }
    }
});

export const {
    setUserType,
    resetAppStore,
    setUserProfile,
    setIsAuthenticated,
    setIP
} = AppStore.actions;

export const appReducer = AppStore.reducer;

export default AppStore;
