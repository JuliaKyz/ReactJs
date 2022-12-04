import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { profileReducer } from "../store/Profile/reducer";
import { chatsReducer } from "../store/Chats/reducer";
import { messagesReducer } from "../store/Messages/reducer";

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
});

export const store = configureStore({ reducer: rootReducer });




// export const store = configureStore({
//     reducer: profileReducer,
// });