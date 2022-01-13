import { connect } from 'react-redux';
import { HOC } from '../../hoc/hocs';
import { FriendsStateless } from './FriendsStateless';

const mapStateToProps = (state) => ({
    menu: state.friends.menu,
})

export const Friends = connect(mapStateToProps)(HOC.withRedirect(FriendsStateless));
