import { addPost_AС, updateNewPostText_AС } from "../../../../../redux/reducer/profileReducer";
import { SubmitPostStateless } from "./SubmitPostStateless";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ text: state.profile.newPostText, });
const mapDispatchToProps = (dispatch) => ({
    onInputChange: (event) => dispatch(updateNewPostText_AС(event.target.value)),
    onButtonClick: () => dispatch(addPost_AС()),
})

export const SubmitPost = connect(mapStateToProps, mapDispatchToProps)(SubmitPostStateless);
