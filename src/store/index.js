import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { chatReducer } from "./chates";
import { messageReducer } from "./messages";
import { profileReducer } from "./profile";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    chates: chatReducer,
    messages: messageReducer,
    profile: profileReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistReducer(persistConfig, rootReducer),
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);