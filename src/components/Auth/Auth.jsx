import { authMe } from '../../redux/reducer/authReducer';
import { connect } from 'react-redux';
import { Layout } from './Layout'
import { Component } from 'react';

const mapStateToProps = (state) => ({
    data: state.auth.data,
});

class AuthStateless extends Component {
    componentDidMount() {
        this.props.authMe();
    }
    render() {
        return (
            <>
                <Layout login={this.props.data.login} />
            </>
        )
    }
}

export const Auth = connect(
    mapStateToProps,
    {
        authMe,
    }
)(AuthStateless);
