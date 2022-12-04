import { REMOVE_CHAT } from "../chats/action";
import { ADD_MESSAGE } from "./action.jsx";
import { getChatMessages } from "../../components/MsgChat";


const initialState = {
    // to be stored like this {[chatId]: [{id, text, author}]}
    messageList: {
        1: [
            {
                id: 1,
                text: "FirstMessage",
                author: "Ann",
            },
            {
                id: 2,
                text: "Сообщение получено от Ann",
                author: "robo",
            },
        ],
        2: [
            {
                id: 1,
                text: "SecondMessage",
                author: "Friend",
            },
            {
                id: 2,
                text: "Сообщение получено от Friend",
                author: "robo",
            },
        ],
        3: [
            {
                id: 1,
                text: "ThirdMessage",
                author: "Elen",
            },
            {
                id: 2,
                text: "Сообщение получено от Elen",
                author: "robo",
            },
        ],
    },
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = getChatMessages(
                state.messageList,
                action.payload.chatId
            );
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.chatId]: [
                        ...currentList,
                        {
                            ...action.payload.message,
                            id: `${action.payload.chatId}${currentList.length}`,
                        },
                    ],
                },
            };
        }
        case REMOVE_CHAT:
            delete state.messageList[action.payload];
            return {
                ...state,
                messageList: { ...state.messageList },
            };
        default:
            return state;
    }
};