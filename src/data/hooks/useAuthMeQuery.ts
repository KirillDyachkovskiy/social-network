import { useQuery } from 'react-query';
import { authService } from '../api/Api';
import { AuthMeRes } from '../types/Api';

const useAuthMeQuery = () => useQuery<AuthMeRes>('authMe', authService.me);

export default useAuthMeQuery;
