import { connect } from 'react-redux';
import { compose } from 'redux';
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
import { RootState } from '../../services/redux/store';

const mapStateToProps = (state: RootState) => ({
  users: getUsers(state),
  followingInProgress: getFollowingInProgress(state),
  pageSize: getPageSize(state),
  currentPage: getCurrentPage(state),
  pagination: getPagination(state),
});

type TStateProps = {
  users: Array<User>;
  followingInProgress: Array<UserId>;
  pageSize: number;
  currentPage: number;
  pagination: Array<number>;
};

type TDispatchProps = {
  changePage: (currentPage: number, pageSize: number) => void;
  toggleFollow: (id: UserId, followed: boolean) => void;
};

type TFriends = TStateProps & TDispatchProps;

function Friends({
  pagination,
  currentPage,
  pageSize,
  changePage,
  toggleFollow,
  followingInProgress,
  users,
}: TFriends) {
  useEffect(() => {
    changePage(currentPage, pageSize);
  }, [changePage, currentPage, pageSize]);

  return (
    <section className={s.friends}>
      <Field>
        <div className={s.friends__content}>
          {users.map((u: User) => (
            <UserCard
              key={u.id}
              user={u}
              toggleFollow={toggleFollow}
              followingInProgress={followingInProgress}
            />
          ))}
        </div>
      </Field>
      <div className={s.friends__paginator}>
        <Paginator
          items={pagination}
          currentPage={currentPage}
          changePage={changePage}
          pageSize={pageSize}
        />
      </div>
    </section>
  );
}

export default compose(
  connect<TStateProps, TDispatchProps, undefined, RootState>(mapStateToProps, {
    changePage,
    toggleFollow,
  }),
  withRedirect
)(Friends);
