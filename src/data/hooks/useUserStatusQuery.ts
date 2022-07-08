import { useQuery } from 'react-query';
import { profileService } from '../api/Api';

const useUserStatusQuery = (userId: number) => {
  return useQuery(['userStatus', userId], () =>
    profileService.getStatus(userId)
  );
};

export default useUserStatusQuery;
