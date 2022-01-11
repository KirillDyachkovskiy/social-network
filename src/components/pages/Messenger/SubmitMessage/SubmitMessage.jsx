import { sendMessage_AС, updateNewMessageText_AС } from '../../../../redux/reducer/messengerReducer';
import { SubmitMessageStateless } from './SubmitMessageStateless';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ text: state.messenger.newMessageText, });
const mapDispatchToProps = (dispatch) => ({
    onInputChange: (event) => dispatch(updateNewMessageText_AС(event.target.value)),
    onButtonClick: () => dispatch(sendMessage_AС()),
})

export const SubmitMessage = connect(mapStateToProps, mapDispatchToProps)(SubmitMessageStateless);
