import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    messages: undefined
};

const MessagesStore = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {
        setMessages(state, action) {
            state.message = action.payload;
        }
    }
});

export const {
    setMessages
} = MessagesStore.actions;

export const messagesReducer = MessagesStore.reducer;

export default MessagesStore;