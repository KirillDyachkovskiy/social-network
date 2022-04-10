import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import withRedirect from '../../hoc';
import {
  changePage,
  getFollowingInProgress,
  getPagination,
  getQuery,
  getUsers,
  toggleFollow,
} from '../../services/redux/reducer/friendsReducer';
import Field from '../../ui/Field';
import s from './friends.module.scss';
import UserCard from '../../components/UserCard';
import { Paginator } from '../../ui/Sidebar';
import { User, UserId } from '../../types/Api';
import FriendsSearch from '../../components/FriendsSearch/FriendsSearch';

function Friends() {
  const [searchParams, setSearchParams] = useSearchParams();

  const users = useSelector(getUsers);
  const followingInProgress = useSelector(getFollowingInProgress);
  const pagination = useSelector(getPagination);
  let query = useSelector(getQuery);

  query = {
    ...query,
    page: Number(searchParams.get('page')) || query.page,
    term: searchParams.get('term') || query.term,
    friend: searchParams.has('friend') || query.friend,
  };

  const { page, term, friend } = query;

  const dispatch = useDispatch();

  const changeCurrentPage = useCallback(
    (page: number, term?: string, friend?: boolean) =>
      dispatch(changePage(page, term, friend)),
    [dispatch]
  );

  useEffect(() => {
    changeCurrentPage(page, term, friend);
    setSearchParams({
      page: String(page),
      ...(term && { term: String(term) }),
      ...(friend && { friend: String(friend) }),
    });
  }, [changeCurrentPage, page, term, friend, searchParams]);

  return (
    <section className={s.friends}>
      <div className={s.friends__content}>
        <FriendsSearch
          changePage={changeCurrentPage}
          query={query}
          setSearchParams={setSearchParams}
        />
        <Field>
          <div className={s.friends__users}>
            {users.map((u: User) => (
              <UserCard
                key={u.id}
                user={u}
                onClick={(id: UserId, followed: boolean) =>
                  dispatch(toggleFollow(id, followed))
                }
                followingInProgress={followingInProgress}
              />
            ))}
          </div>
        </Field>
      </div>
      <div className={s.friends__paginator}>
        <Paginator
          items={pagination}
          page={page}
          changePage={changeCurrentPage}
        />
      </div>
    </section>
  );
}

export default withRedirect(Friends);
