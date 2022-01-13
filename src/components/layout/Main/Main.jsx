import { connect } from 'react-redux';
import { MainStateless } from './MainStateless';

const mapStateToProps = (state) => ({
    authedUser: state.auth.data,
})

export const Main = connect(mapStateToProps)(MainStateless)