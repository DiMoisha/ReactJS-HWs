import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { chatReducer } from "./chates";
import { messageReducer } from "./messages";
import { profileReducer } from "./profile";
import { gistReducer } from "./gists";

const rootReducer = combineReducers({
    chates: chatReducer,
    messages: messageReducer,
    profile: profileReducer,
    gists: gistReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);