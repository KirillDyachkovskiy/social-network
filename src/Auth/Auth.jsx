import {authMe, getUserData, getSidebar, authLogOut} from '../services/redux/reducer/authReducer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {MainLayout} from "../layouts/MainLayout";

const mapStateToProps = (state) => ({
  authedUserData: getUserData(state),
  sidebar: getSidebar(state),
});

const AuthStateless = ({authMe, authedUserData, authLogOut, sidebar}) => {
  useEffect(() => {
    authMe();
  }, [authMe])

  return <MainLayout sidebar={sidebar} login={authedUserData?.login} authLogOut={authLogOut} />;
}

export const Auth = compose(
  connect(mapStateToProps, {authMe, authLogOut}),
)(AuthStateless);
