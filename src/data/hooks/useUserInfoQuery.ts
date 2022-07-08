import { useQuery } from 'react-query';
import { profileService } from '../api/Api';
import { TUserInfoRes } from '../types/Api';

const useUserInfoQuery = (userId: number) =>
  useQuery<TUserInfoRes>(['userInfo', userId], () =>
    profileService.getData(userId)
  );

export default useUserInfoQuery;
