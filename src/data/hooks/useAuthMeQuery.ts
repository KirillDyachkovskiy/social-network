import { useQuery } from 'react-query';
import { authService } from '../api/Api';
import { AuthData } from '../types/Api';

const useAuthMeQuery = () =>
  useQuery<AuthData | null>('authMe', authService.me, {
    select: (data) => (data?.id ? data : null),
  });

export default useAuthMeQuery;
