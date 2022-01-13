import { connect } from 'react-redux';
import { HOC } from '../../hoc/hocs';
import { MessengerStateless } from './MessengerStateless';

const mapStateToProps = (state) => ({
    menu: state.messenger.menu,
})

export const Messenger = connect(mapStateToProps)(HOC.withRedirect(MessengerStateless));
