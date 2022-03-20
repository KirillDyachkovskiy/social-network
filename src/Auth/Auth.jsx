import {authMe, getData, getSidebar} from '../services/redux/reducer/authReducer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {MainLayout} from "../layouts/MainLayout";

const mapStateToProps = (state) => ({
  data: getData(state),
  sidebar: getSidebar(state),
});

const AuthStateless = ({authMe, data, sidebar}) => {
  useEffect(() => {
    authMe();
  }, [])

  if (!data) {
    return null
  }

  return <MainLayout sidebar={sidebar} />
}

export const Auth = compose(
  connect(mapStateToProps, {authMe}),
)(AuthStateless);
