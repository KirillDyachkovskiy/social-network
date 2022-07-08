import { useQuery } from 'react-query';
import { usersService } from '../api/Api';
import { UsersRes } from '../types/Api';

const useUsersPage = (
  page: number,
  term: string,
  friend: boolean,
  count = 10
) => {
  const queryInfo = useQuery<UsersRes>(
    ['usersPage', page, term, friend, count],
    () => usersService.getByPage({ count, page, term, friend })
  );

  const { data, ...other } = queryInfo;

  return {
    ...other,
    data: {
      users: data?.items,
      pages: Math.ceil((data?.totalCount || 1) / count),
    },
  };
};

export default useUsersPage;
