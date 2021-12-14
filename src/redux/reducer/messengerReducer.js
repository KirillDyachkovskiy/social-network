const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
export const updateNewMessageText_ActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, text, });

const SEND_MESSAGE = "SEND-MESSAGE";
export const sendMessage_ActionCreator = () => ({ type: SEND_MESSAGE });

const initialState = {
    dialogs: [
        { id: 0, name: "Алексей Захаров" },
        { id: 1, name: "Петя Беляшёв" },
        { id: 2, name: "Айсен Николаев" },
        { id: 3, name: "Сергей Мальцев" },
        { id: 4, name: "Николай Колесов" },
    ],
    messages: [
        { id: 0, sender: 0, text: "Hi" },
        { id: 1, sender: 1, text: "I'm glad to see you" },
        { id: 2, sender: 0, text: "We'll go to the gym tomorrow" },
    ],
    newMessageText: "",
};

export const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.text,
            };
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length, sender: Math.round(Math.random()), text: state.newMessageText, }],
                newMessageText: "",
            };
        default:
            return state;
    }
}