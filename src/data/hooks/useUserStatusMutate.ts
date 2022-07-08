import { useMutation, useQueryClient } from 'react-query';
import { profileService } from '../api/Api';
import { TStatus } from '../types/Api';

const useUserStatusMutate = () => {
  const queryClient = useQueryClient();

  return useMutation(
    'updateUserStatus',
    (status: TStatus) => profileService.updateStatus(status),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userStatus']);
      },
    }
  );
};

export default useUserStatusMutate;
