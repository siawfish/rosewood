import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './appStore/appStore';
import { messagesReducer } from './messagesStore/messagesStore';
// import { customersReducer } from './customerStore/customerStore';
import { listingsReducer } from './listingsStore/listingsStore';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer } from 'redux-persist';
import { websiteReducer } from './websiteStore/websiteStore';
// import { cartsReducer } from './cartStore/cartStore';

const rootReducer = combineReducers({
    app: appReducer,
    messages: messagesReducer,
    // customers: customersReducer,
    listings: listingsReducer,
    website: websiteReducer,
    // cart: cartsReducer
});

const persistConfig = {
    key: 'root',
    storage: storage
}

const PersistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

export {
    rootReducer,
    PersistedReducer
}
