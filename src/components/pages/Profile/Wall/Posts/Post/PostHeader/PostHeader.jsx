import { connect } from 'react-redux';
import { PostHeaderStateless } from './PostHeaderStateless';

const mapStateToProps = (state) => ({
    photo: state.profile.userProfile.photos.small,
    name: state.profile.userProfile.fullName,
});

export const PostHeader = connect(mapStateToProps)(PostHeaderStateless);
