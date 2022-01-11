import { connect } from 'react-redux';
import { FriendsStateless } from './FriendsStateless';

const mapStateToProps = (state) => ({
    menu: state.friends.menu,
})

export const Friends = connect(mapStateToProps)(FriendsStateless);
