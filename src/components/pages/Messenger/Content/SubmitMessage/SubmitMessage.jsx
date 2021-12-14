import { sendMessage_ActionCreator, updateNewMessageText_ActionCreator } from "../../../../../redux/reducer/messengerReducer";
import { SubmitMessageStateless } from "./SubmitMessageStateless";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ text: state.messenger.newMessageText, });
const mapDispatchToProps = (dispatch) => ({
    onInputChange: (event) => dispatch(updateNewMessageText_ActionCreator(event.target.value)),
    onButtonClick: () => dispatch(sendMessage_ActionCreator()),
})

export const SubmitMessage = connect(mapStateToProps, mapDispatchToProps)(SubmitMessageStateless);
