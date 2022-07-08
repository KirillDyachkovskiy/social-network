import { useMutation, useQueryClient } from 'react-query';
import { profileService } from '../api/Api';
import { TAvatar } from '../types/Api';

const useUserAvatarMutate = () => {
  const queryClient = useQueryClient();

  return useMutation(
    'updateUserAvatar',
    (avatar: TAvatar) => profileService.updateAvatar(avatar),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userInfo']);
      },
    }
  );
};

export default useUserAvatarMutate;
