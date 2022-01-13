import { connect } from 'react-redux';
import { HOC } from '../../hoc/hocs';
import { compose } from 'redux';
import { MessengerStateless } from './MessengerStateless';

const mapStateToProps = (state) => ({
    menu: state.messenger.menu,
})

export const Messenger = compose(
    connect(mapStateToProps),
    HOC.withRedirect
)(MessengerStateless);
