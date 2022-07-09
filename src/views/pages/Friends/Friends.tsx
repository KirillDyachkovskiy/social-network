import { FriendsSearch, UserCard, withRedirect } from '../../components';
import { Field, Paginator, Preloader } from '../../ui';
import { User } from '../../../data/types/Api';
import { useSearchParamsObject, useUsersPageQuery } from '../../../data/hooks';
import s from './friends.module.scss';

function Friends() {
  const [searchParams, setSearchParams] = useSearchParamsObject({
    page: '1',
    count: '10',
    term: '',
  });

  // @ts-ignore
  const { page, term, friend } = searchParams;

  const { data, isLoading } = useUsersPageQuery(page, term, friend);

  const onSearchChange = (term: string, friend: boolean) => {
    // @ts-ignore
    setSearchParams({
      page: String(page),
      term,
      ...(friend && { friend: String(friend) }),
    });
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
          {isLoading || !data ? (
            <Preloader />
          ) : (
            <div className={s.friends__users}>
              {data.users?.map((user: User) => (
                <UserCard key={user.id} user={user} />
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
