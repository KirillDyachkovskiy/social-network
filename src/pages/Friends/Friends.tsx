import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import withRedirect from '../../hoc';
import {
  changePage,
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
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
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);
  const pagination = useSelector(getPagination);

  const dispatch = useDispatch();

  const onClick = (id: UserId, followed: boolean) => {
    dispatch(toggleFollow(id, followed));
  };

  const changeCurrentPage = (page: number, pageSize: number) => {
    dispatch(changePage(page, pageSize));
  };

  useEffect(() => {
    changeCurrentPage(currentPage, pageSize);
  }, [changePage, currentPage, pageSize]);

  return (
    <section className={s.friends}>
      <Field>
        <div className={s.friends__content}>
          {users.map((u: User) => (
            <UserCard
              key={u.id}
              user={u}
              onClick={onClick}
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
          pageSize={pageSize}
        />
      </div>
    </section>
  );
}

export default withRedirect(Friends);
