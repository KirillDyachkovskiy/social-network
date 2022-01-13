import { connect } from 'react-redux';
import { PostHeaderStateless } from './PostHeaderStateless';

const mapStateToProps = (state) => ({
    photo: state.profile.visitedProfile?.photos.small,
    name: state.profile.visitedProfile?.fullName,
});

export const PostHeader = connect(mapStateToProps)(PostHeaderStateless);
