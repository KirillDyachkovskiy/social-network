import { useMutation, useQueryClient } from 'react-query';
import { profileService } from '../api/Api';
import { TUserInfo } from '../types/Api';

const useUserInfoMutate = () => {
  const queryClient = useQueryClient();

  return useMutation(
    'updateUserInfo',
    (userInfo: TUserInfo) => profileService.updateInfo(userInfo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userInfo']);
      },
    }
  );
};

export default useUserInfoMutate;
