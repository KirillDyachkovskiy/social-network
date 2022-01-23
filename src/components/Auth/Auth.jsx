import {authMe} from '../../services/redux/reducer/authReducer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Layout} from './Layout'
import {Component} from 'react';

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
        {this.props.data ? <Layout/> : null}
      </>
    )
  }
}

export const Auth = compose(
  connect(mapStateToProps, {authMe}),
)(AuthStateless);
