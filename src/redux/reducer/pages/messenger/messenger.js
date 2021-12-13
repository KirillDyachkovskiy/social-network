const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
export const updateNewMessageText = (text) => ({ type: UPDATE_NEW_MESSAGE, text, });

const SEND_MESSAGE = "SEND-MESSAGE";
export const sendMessage = () => ({ type: SEND_MESSAGE });

export const messengerReducer = (action, state) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.text;
            break;
        case SEND_MESSAGE:
            state.messages.push({ id: state.messages.length, sender: Math.round(Math.random()), text: state.newMessageText, });
            state.newMessageText = "";
            break;
        default:
    }
    return state;
}