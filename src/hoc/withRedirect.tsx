import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { ComponentType } from 'react';
import { getUserData } from '../services/redux/reducer/authReducer';
import { AuthData } from '../types/Api';

interface IWithRedirect {
  authedUser: AuthData;
}

export default (WrappedComponent: ComponentType) => {
  const mapStateToProps = (state: any) => ({
    authedUser: getUserData(state),
  });

  function RedirectedComponent({ authedUser, ...props }: IWithRedirect) {
    return authedUser.id ? (
      <WrappedComponent {...props} />
    ) : (
      <Navigate to='/login' />
    );
  }

  return connect(mapStateToProps)(RedirectedComponent);
};
