import { ADD_CHAT, REMOVE_CHAT } from "./action";
const initialState = {
    chatList: [
        {
            id: 1,
            name: "Ivan",

        },
        {
            id: 2,
            name: "Victor",

        },
        {
            id: 3,
            name: "Oleg",

        },
    ],
};
export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: state.chatList.length + 1,
                        name: action.payload,
                    },
                ],
            };
        case REMOVE_CHAT:
            return {
                ...state,
                chatList: state.chatList.filter(chat => chat.id !== action.payload),
            };
        default:
            return state;
    }
};