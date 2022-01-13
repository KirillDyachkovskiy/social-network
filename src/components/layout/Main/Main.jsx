import { connect } from 'react-redux';
import { compose } from 'redux';
import { MainStateless } from './MainStateless';

const mapStateToProps = (state) => ({
    authedUser: state.auth.data,
})

export const Main = compose(
    connect(mapStateToProps)
)(MainStateless);
