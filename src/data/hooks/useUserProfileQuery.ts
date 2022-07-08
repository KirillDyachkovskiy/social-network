import { useQuery } from 'react-query';
import { profileService } from '../api/Api';
import { UserInfoRes } from '../types/Api';

const useUserProfileQuery = (userId: number) => {
  return useQuery<UserInfoRes>(['userProfile', userId], () =>
    profileService.getData(userId)
  );
};

export default useUserProfileQuery;
