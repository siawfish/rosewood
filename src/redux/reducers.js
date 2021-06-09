import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './appStore/appStore';
import { messagesReducer } from './messagesStore/messagesStore';
import { interestsReducer } from './interestsStore/interestsStore';
import { listingsReducer } from './listingsStore/listingsStore';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer } from 'redux-persist';
import { websiteReducer } from './websiteStore/websiteStore';

const rootReducer = combineReducers({
    app: appReducer,
    messages: messagesReducer,
    interests: interestsReducer,
    listings: listingsReducer,
    website: websiteReducer
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
