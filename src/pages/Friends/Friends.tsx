import { connect } from 'react-redux';
import { compose } from 'redux';
import { useEffect } from 'react';
import withRedirect from '../../hoc';
import {
  changePage,
  changeUsersFetchingStatus,
  getCurrentPage,
  getFollowingInProgress,
  getFriendsIsFetching,
  getPageSize,
  getPagination,
  getUsers,
  toggleFollow,
} from '../../services/redux/reducer/friendsReducer';
import Preloader from '../../ui/Preloader';
import Field from '../../ui/Field';
import s from './friends.module.scss';
import UserCard from '../../components/UserCard';
import { Paginator } from '../../ui/Sidebar';
import { User, UserId } from '../../types/Api';
import { TState } from '../../services/redux/store';

const mapStateToProps = (state: TState) => ({
  isFetching: getFriendsIsFetching(state),
  users: getUsers(state),
  followingInProgress: getFollowingInProgress(state),
  pageSize: getPageSize(state),
  currentPage: getCurrentPage(state),
  pagination: getPagination(state),
});

type TStateProps = {
  isFetching: boolean;
  users: Array<User>;
  followingInProgress: Array<UserId>;
  pageSize: number;
  currentPage: number;
  pagination: Array<number>;
};

type TDispatchProps = {
  changePage: (currentPage: number, pageSize: number) => void;
  toggleFollow: (id: UserId, followed: boolean) => void;
  changeUsersFetchingStatus: (value: boolean) => void;
};

type TFriends = TStateProps & TDispatchProps;

function Friends({
  pagination,
  currentPage,
  pageSize,
  changePage,
  isFetching,
  toggleFollow,
  changeUsersFetchingStatus,
  followingInProgress,
  users,
}: TFriends) {
  useEffect(() => {
    changePage(currentPage, pageSize);
  }, [changePage, currentPage, pageSize]);

  useEffect(
    () => () => {
      changeUsersFetchingStatus(true);
    },
    [changeUsersFetchingStatus]
  );

  return (
    <section className={s.friends}>
      <Field>
        <div className={s.friends__content}>
          {isFetching ? (
            <Preloader />
          ) : (
            users.map((u: User) => (
              <UserCard
                key={u.id}
                user={u}
                toggleFollow={toggleFollow}
                followingInProgress={followingInProgress}
              />
            ))
          )}
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
  connect<TStateProps, TDispatchProps, undefined, TState>(mapStateToProps, {
    changePage,
    toggleFollow,
    changeUsersFetchingStatus,
  }),
  withRedirect
)(Friends);
