import { useMutation, useQueryClient } from 'react-query';
import { authService } from '../api/Api';
import { LoginMeReq } from '../types/Api';

const useAuthLoginMutate = () => {
  const queryClient = useQueryClient();

  return useMutation(
    'authLogin',
    (data: LoginMeReq) => authService.login(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['authMe']);
      },
    }
  );
};

export default useAuthLoginMutate;
