import { createContext, FC, ReactNode } from 'react';
import {
  useAuthLoginMutate,
  useAuthLogoutMutate,
  useAuthMeQuery,
} from '../hooks';
import { AuthData, LoginMeReq } from '../types/Api';

type TAuthContext = {
  user: AuthData | null;
  login: (data: LoginMeReq) => void;
  logout: () => void;
};

interface IAuthProvider {
  children: ReactNode;
}

export const AuthContext = createContext<TAuthContext>({} as TAuthContext);

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
  const { data: user } = useAuthMeQuery();

  const { mutate: login } = useAuthLoginMutate();
  const { mutate: logout } = useAuthLogoutMutate();

  const value = {
    user: user || null,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
