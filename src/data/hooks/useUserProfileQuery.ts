import { useQuery } from 'react-query';
import { profileService } from '../api/Api';
import { TUserInfoRes } from '../types/Api';

const useUserProfileQuery = (userId: number) =>
  useQuery<TUserInfoRes>(['userProfile', userId], () =>
    profileService.getData(userId)
  );

export default useUserProfileQuery;
