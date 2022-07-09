import { useContext } from 'react';
import { AuthContext } from '../hocs/AuthProvider';

const useAuth = () => useContext(AuthContext);

export default useAuth;
