import { connect } from 'react-redux';
import { HeaderStateless } from './HeaderStateless';

const mapStateToProps = (state) => ({
    photo: state.profile.userProfile.photos.small,
    name: state.profile.userProfile.fullName,
});

export const Header = connect(mapStateToProps)(HeaderStateless)