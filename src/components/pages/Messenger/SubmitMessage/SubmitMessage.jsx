import { sendMessage, updateNewMessageText } from '../../../../redux/reducer/messengerReducer';
import { SubmitMessageStateless } from './SubmitMessageStateless';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    text: state.messenger.newMessageText,
});


export const SubmitMessage = connect(
    mapStateToProps,
    {
        updateNewMessageText,
        sendMessage,
    }
)(SubmitMessageStateless);
