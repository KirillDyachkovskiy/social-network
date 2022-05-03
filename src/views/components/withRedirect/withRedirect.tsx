import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ComponentType } from 'react';
import { getUserData } from '../../../services/redux/reducers/authReducer';

export default function withRedirect<T>(WrappedComponent: ComponentType<T>) {
  function RedirectedComponent(props: T) {
    const { id } = useSelector(getUserData);

    if (id) {
      return <WrappedComponent {...props} />;
    }

    return <Navigate to='/login' />;
  }

  return RedirectedComponent;
}
