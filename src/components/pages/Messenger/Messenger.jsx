import { connect } from 'react-redux';
import { MessengerStateless } from './MessengerStateless';

const mapStateToProps = (state) => ({
    menu: state.messenger.menu,
})

export const Messenger = connect(mapStateToProps)(MessengerStateless);
