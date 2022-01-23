import {authMe} from '../../services/redux/reducer/authReducer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Layout} from './Layout'
import {useEffect} from 'react';
import {getData} from "../../services/selectors";

const mapStateToProps = (state) => ({
  data: getData(state),
});

const AuthStateless = ({authMe, data}) => {
  useEffect(() => {
    authMe();
  }, [])

  return <>{data ? <Layout/> : null}</>
}

export const Auth = compose(
  connect(mapStateToProps, {authMe}),
)(AuthStateless);
