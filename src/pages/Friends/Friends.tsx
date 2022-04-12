import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  changePage,
  getFollowingInProgress,
  getPagination,
  getQuery,
  getUsers,
  toggleFollow,
} from '../../services/redux/reducers/friendsReducer';
import Field from '../../ui/Field';
import UserCard from '../../components/UserCard';
import { Paginator } from '../../ui/Sidebar';
import FriendsSearch from '../../components/FriendsSearch/FriendsSearch';
import withRedirect from '../../components/withRedirect';
import { UserId, User, UsersPayload } from '../../services/api/Api';
import s from './friends.module.scss';

function Friends() {
  const [searchParams, setSearchParams] = useSearchParams();

  const users = useSelector(getUsers);
  const followingInProgress = useSelector(getFollowingInProgress);
  const pagination = useSelector(getPagination);
  const { page, count, term, friend } = useSelector(getQuery);

  const dispatch = useDispatch();

  const changeCurrentPage = useCallback(
    (query: UsersPayload) => dispatch(changePage(query)),
    [dispatch]
  );

  const actualPage =
    (searchParams.has('page') && Number(searchParams.get('page'))) || page;
  const actualTerm = searchParams.get('term') || term;
  const actualFriend = !!searchParams.get('friend') || friend;

  useEffect(() => {
    changeCurrentPage({
      page: actualPage,
      count,
      term: actualTerm,
      friend: actualFriend,
    });
  }, [changeCurrentPage, count, actualTerm, actualFriend, actualPage]);

  useEffect(() => {
    setSearchParams({
      page: String(page),
      ...(term && { term }),
      ...(friend && { friend: 'true' }),
    });
  }, [page, term, friend, setSearchParams]);

  return (
    <section className={s.friends}>
      <div className={s.friends__content}>
        <FriendsSearch
          changePage={(term: string, friend: boolean) =>
            changeCurrentPage({ page: 1, count, term, friend })
          }
          term={actualTerm}
          friend={!!actualFriend}
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
          changePage={(page: number) =>
            changeCurrentPage({ page, count, term, friend })
          }
        />
      </div>
    </section>
  );
}

export default withRedirect(Friends);
