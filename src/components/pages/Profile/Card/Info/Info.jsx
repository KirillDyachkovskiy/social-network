import { connect } from 'react-redux';
import { changeStatus } from '../../../../../redux/reducer/friendsReducer';
import { InfoStateLess } from './InfoStateless';

const mapStateToProps = (state) => ({
    user: state.friends.currentUser,
});

export const Info = connect(
    mapStateToProps,
    {
        changeStatus,
    }
)(InfoStateLess);