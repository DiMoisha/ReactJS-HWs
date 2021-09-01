import { createStore, combineReducers } from 'redux';
import { chatReducer } from "./chates";
import { messageReducer } from "./messages";
import { profileReducer } from "./profile";

const rootReducer = combineReducers({
    chates: chatReducer,
    messages: messageReducer,
    profile: profileReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())