import {authMe} from '../../services/redux/reducer/authReducer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Layout} from './Layout'
import {Component} from 'react';
import {getData} from "../../services/selectors";

const mapStateToProps = (state) => ({
  data: getData(state),
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
