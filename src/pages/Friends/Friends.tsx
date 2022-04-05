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

const mapStateToProps = (state: any) => ({
  isFetching: getFriendsIsFetching(state),
  users: getUsers(state),
  followingInProgress: getFollowingInProgress(state),
  pageSize: getPageSize(state),
  currentPage: getCurrentPage(state),
  pagination: getPagination(state),
});

interface IFriends {
  pagination: any;
  currentPage: number;
  pageSize: number;
  changePage: (currentPage: number, pageSize: number) => void;
  isFetching: boolean;
  toggleFollow: () => void;
  changeUsersFetchingStatus: (value: boolean) => void;
  followingInProgress: Array<UserId>;
  users: Array<User>;
}

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
}: IFriends) {
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
  connect(mapStateToProps, {
    changePage,
    toggleFollow,
    changeUsersFetchingStatus,
  }),
  withRedirect
  // @ts-ignore
)(Friends);
