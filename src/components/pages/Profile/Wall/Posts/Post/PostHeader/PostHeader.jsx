import { connect } from 'react-redux';
import { compose } from 'redux'
import { PostHeaderStateless } from './PostHeaderStateless';
import {getVisitedProfile} from "../../../../../../../services/selectors";

const mapStateToProps = (state) => ({
    photo: getVisitedProfile(state).photos?.small,
    name: getVisitedProfile(state).fullName,
});

export const PostHeader = compose(
    connect(mapStateToProps)
)(PostHeaderStateless);
