import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import withRedirect from '../../hoc';
import {
  changePage,
  getCurrentPage,
  getFollowingInProgress,
  getPagination,
  getUsers,
  toggleFollow,
} from '../../services/redux/reducer/friendsReducer';
import Field from '../../ui/Field';
import s from './friends.module.scss';
import UserCard from '../../components/UserCard';
import { Paginator } from '../../ui/Sidebar';
import { User, UserId } from '../../types/Api';

function Friends() {
  const users = useSelector(getUsers);
  const followingInProgress = useSelector(getFollowingInProgress);
  const currentPage = useSelector(getCurrentPage);
  const pagination = useSelector(getPagination);

  const dispatch = useDispatch();

  const changeFollow = (id: UserId, followed: boolean) => {
    dispatch(toggleFollow(id, followed));
  };

  const changeCurrentPage = useCallback(
    (page: number) => {
      dispatch(changePage(page));
    },
    [dispatch]
  );

  useEffect(() => {
    changeCurrentPage(currentPage);
  }, [changeCurrentPage, currentPage]);

  return (
    <section className={s.friends}>
      <Field>
        <div className={s.friends__content}>
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
      <div className={s.friends__paginator}>
        <Paginator
          items={pagination}
          currentPage={currentPage}
          changePage={changeCurrentPage}
        />
      </div>
    </section>
  );
}

export default withRedirect(Friends);
