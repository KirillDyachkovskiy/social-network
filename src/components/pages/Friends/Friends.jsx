import { connect } from 'react-redux';
import { compose } from 'redux';
import { HOC } from '../../hoc/hocs';
import { FriendsStateless } from './FriendsStateless';

const mapStateToProps = (state) => ({
  menu: state.friends.menu,
});

export const Friends = compose(
  connect(mapStateToProps),
  HOC.withRedirectToLogin,
)(FriendsStateless);
