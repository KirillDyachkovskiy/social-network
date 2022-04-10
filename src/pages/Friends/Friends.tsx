import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
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
import Submit from '../../components/Submit';
import Checkbox from '../../ui/Checkbox';

function Friends() {
  const users = useSelector(getUsers);
  const followingInProgress = useSelector(getFollowingInProgress);
  const { page, term, friend } = useSelector(getQuery);
  const pagination = useSelector(getPagination);

  const [filter, setFilter] = useState<string>(term);
  const [isFriendsOnly, setIsFriendsOnly] = useState<boolean>(!!friend);

  const dispatch = useDispatch();

  const changeFollow = (id: UserId, followed: boolean) => {
    dispatch(toggleFollow(id, followed));
  };

  const changeCurrentPage = useCallback(
    (page: number) => dispatch(changePage(page)),
    [dispatch]
  );

  const onSubmit = useCallback(
    (page: number, term: string, friend: boolean | null) => {
      dispatch(changePage(page, term, friend));
    },
    [dispatch]
  );

  useEffect(() => {
    changeCurrentPage(page);
  }, [changeCurrentPage, page]);

  return (
    <section className={s.friends}>
      <div className={s.friends__content}>
        <div className={s.friends__search}>
          <Field>
            <Submit
              placeholder='Search for friend'
              value={filter}
              onChange={setFilter}
              onSubmit={() => onSubmit(page, filter, isFriendsOnly)}
            >
              Find
            </Submit>
            <div className={s.friends__checkbox}>
              <Checkbox
                id='friendsOnly'
                label='Only friends'
                checked={isFriendsOnly}
                onChange={setIsFriendsOnly}
              />
            </div>
          </Field>
        </div>
        <Field>
          <div className={s.friends__users}>
            {users.map((u: User) => (
              <UserCard
                key={u.id}
                user={u}
                onClick={changeFollow}
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
