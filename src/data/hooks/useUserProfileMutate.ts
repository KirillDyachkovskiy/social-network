import { useMutation, useQueryClient } from 'react-query';
import { profileService } from '../api/Api';
import { TUserInfo } from '../types/Api';

const useUserProfileMutate = () => {
  const queryClient = useQueryClient();

  return useMutation(
    'updateUserProfile',
    (userInfo: TUserInfo) => profileService.updateInfo(userInfo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userProfile']);
      },
    }
  );
};

export default useUserProfileMutate;
