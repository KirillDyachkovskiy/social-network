import { Navigate } from 'react-router-dom';
import { ComponentType } from 'react';
import { useAuth } from '../../../data/hooks';

export default function withRedirect<T>(WrappedComponent: ComponentType<T>) {
  function RedirectedComponent(props: T) {
    const { user } = useAuth();

    if (user) {
      return <WrappedComponent {...props} />;
    }

    return <Navigate to='/login' />;
  }

  return RedirectedComponent;
}
