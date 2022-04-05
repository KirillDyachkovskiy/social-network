import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { ComponentType } from 'react';
import { getUserData } from '../services/redux/reducer/authReducer';
import { TState } from '../services/redux/store';

export default function withRedirect<T>(WrappedComponent: ComponentType<T>) {
  const mapStateToProps = (state: TState) => ({
    authedUser: getUserData(state),
  });

  function RedirectedComponent({ authedUser, ...props }: any) {
    return authedUser.id ? (
      <WrappedComponent {...(props as T)} />
    ) : (
      <Navigate to='/login' />
    );
  }

  return connect(mapStateToProps)(RedirectedComponent);
}
