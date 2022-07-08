import { useSelector } from 'react-redux';
import { getFollowingInProgress } from '../../../data/redux/reducers/friendsReducer';
import { FriendsSearch, UserCard, withRedirect } from '../../components';
import { Field, Paginator, Preloader } from '../../ui';
import { User } from '../../../data/types/Api';
import { useSearchParamsObject, useUsersPageQuery } from '../../../data/hooks';
import s from './friends.module.scss';
import useUserSubscribeMutate from '../../../data/hooks/useUserSubscribeMutate';

function Friends() {
  const [searchParams, setSearchParams] = useSearchParamsObject({
    page: '1',
    count: '10',
    term: '',
    friend: 'false',
  });

  // @ts-ignore
  const { page, term, friend } = searchParams;

  const followingInProgress = useSelector(getFollowingInProgress);

  const { data, isSuccess, isFetching } = useUsersPageQuery(page, term, friend);
  const { mutate: toggleSubscribe } = useUserSubscribeMutate();

  const onSearchChange = (term: string, friend: boolean) => {
    // @ts-ignore
    setSearchParams({ page: String(page), term, friend: String(friend) });
  };

  const onPaginate = (page: number) => {
    // @ts-ignore
    setSearchParams({ page: String(page), term, friend: String(friend) });
  };

  return (
    <section className={s.friends}>
      <div className={s.friends__content}>
        <FriendsSearch
          onSubmit={onSearchChange}
          term={term}
          friend={friend === 'true'}
        />
        <Field>
          {!isSuccess || isFetching || !data ? (
            <Preloader />
          ) : (
            <div className={s.friends__users}>
              {data.users?.map((u: User) => (
                <UserCard
                  key={u.id}
                  user={u}
                  onClick={toggleSubscribe}
                  followingInProgress={followingInProgress}
                />
              ))}
            </div>
          )}
        </Field>
      </div>
      <div className={s.friends__paginator}>
        <Paginator total={data?.pages} value={page} onChange={onPaginate} />
      </div>
    </section>
  );
}

export default withRedirect(Friends);
