import { useMutation, useQueryClient } from 'react-query';
import { authService } from '../api/Api';

const useAuthLogoutMutate = () => {
  const queryClient = useQueryClient();

  return useMutation('authLogout', authService.logout, {
    onSuccess: () => {
      queryClient.invalidateQueries(['authMe']);
    },
  });
};

export default useAuthLogoutMutate;
