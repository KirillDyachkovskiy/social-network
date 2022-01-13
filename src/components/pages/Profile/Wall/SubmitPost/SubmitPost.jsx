import { addPost, updateNewPostText } from '../../../../../redux/reducer/profileReducer';
import { SubmitPostStateless } from './SubmitPostStateless';
import { compose } from 'redux'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    text: state.profile.newPostText,
});


export const SubmitPost = compose(
    connect(mapStateToProps, { updateNewPostText, addPost, })
)(SubmitPostStateless);
