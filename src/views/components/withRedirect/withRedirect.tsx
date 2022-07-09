import { Navigate } from 'react-router-dom';
import { ComponentType } from 'react';
import { useAuthMeQuery } from '../../../data/hooks';

export default function withRedirect<T>(WrappedComponent: ComponentType<T>) {
  function RedirectedComponent(props: T) {
    const { data } = useAuthMeQuery();
    const login = data?.data?.login;

    if (login) {
      return <WrappedComponent {...props} />;
    }

    return <Navigate to='/login' />;
  }

  return RedirectedComponent;
}
