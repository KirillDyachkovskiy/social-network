import { useMutation, useQueryClient } from 'react-query';
import { usersService } from '../api/Api';
import { UserSubscribeRes } from '../types/Api';

const useUserSubscribeMutate = () => {
  const queryClient = useQueryClient();

  return useMutation(
    'updateUserSubscribe',
    ({ userId, followed }: UserSubscribeRes) =>
      followed
        ? usersService.unsubscribeById(userId)
        : usersService.subscribeById(userId),
    {
      onSuccess: () => queryClient.invalidateQueries(['usersPage']),
    }
  );
};

export default useUserSubscribeMutate;
