import { addPost, updateNewPostText } from '../../../../../redux/reducer/profileReducer';
import { SubmitPostStateless } from './SubmitPostStateless';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    text: state.profile.newPostText,
});


export const SubmitPost = connect(
    mapStateToProps,
    {
        updateNewPostText,
        addPost,
    }
)(SubmitPostStateless);
