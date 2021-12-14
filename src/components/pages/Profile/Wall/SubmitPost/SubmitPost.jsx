import { addPost_ActionCreator, updateNewPostText_ActionCreator } from "../../../../../redux/reducer/profileReducer";
import { SubmitPostStateless } from "./SubmitPostStateless";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ text: state.profile.newPostText, });
const mapDispatchToProps = (dispatch) => ({
    onInputChange: (event) => dispatch(updateNewPostText_ActionCreator(event.target.value)),
    onButtonClick: () => dispatch(addPost_ActionCreator()),
})

export const SubmitPost = connect(mapStateToProps, mapDispatchToProps)(SubmitPostStateless);
