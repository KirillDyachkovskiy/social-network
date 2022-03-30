import {authMe, getAuthedUserData, getSidebar} from '../services/redux/reducer/authReducer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {MainLayout} from "../layouts/MainLayout";

const mapStateToProps = (state) => ({
  authedUserData: getAuthedUserData(state),
  sidebar: getSidebar(state),
});

const AuthStateless = ({authMe, authedUserData, sidebar}) => {
  useEffect(() => {
    authMe();
  }, [])

  return authedUserData ? <MainLayout sidebar={sidebar} /> : <p>Загрузка</p>;
}

export const Auth = compose(
  connect(mapStateToProps, {authMe}),
)(AuthStateless);
