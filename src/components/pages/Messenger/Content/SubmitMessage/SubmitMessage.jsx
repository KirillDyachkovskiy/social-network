import { sendMessage, updateNewMessageText } from "../../../../../redux/reducer/messengerReducer";
import { SubmitMessageStateless } from "./SubmitMessageStateless";

const SubmitMessage = ({ store }) => {
    const onInputChange = (event) => store.dispatch(updateNewMessageText(event.target.value));
    const onButtonClick = () => store.dispatch(sendMessage());
    return <SubmitMessageStateless text={store.getState().messenger.newMessageText} onInputChange={onInputChange} onButtonClick={onButtonClick} />
}

export { SubmitMessage };