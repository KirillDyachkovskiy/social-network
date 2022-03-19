import {connect} from 'react-redux';
import {compose} from 'redux';
import {HOC} from '../../hoc';
import {
  changePage,
  changeUsersFetchingStatus,
  getCurrentPage,
  getFollowingInProgress,
  getFriendsIsFetching,
  getPageSize,
  getPagination,
  getUsers,
  toggleFollow
} from "../../services/redux/reducer/friendsReducer";
import {useEffect} from "react";
import Preloader from "../../ui/Preloader";
import {Paginator} from "../../ui/Paginator";
import {Field} from "../../ui/Field";
import s from './friends.module.scss';
import {UserCard} from "../../components/UserCard";

const mapStateToProps = (state) => ({
  isFetching: getFriendsIsFetching(state),
  users: getUsers(state),
  followingInProgress: getFollowingInProgress(state),
  pageSize: getPageSize(state),
  currentPage: getCurrentPage(state),
  pagination: getPagination(state),
});

const FriendsStateless = ({
                            pagination,
                            currentPage,
                            pageSize,
                            changePage,
                            isFetching,
                            changeUsersFetchingStatus,
                            followingInProgress,
                            users,
                          }) => {
  useEffect(() => {
    changePage(currentPage, pageSize);
  }, [])

  useEffect(() => () => {
    changeUsersFetchingStatus(true)
  }, [])

  return (
    <section className={s.friends}>
      <Field>
        <div className={s.friends__content}>
          {isFetching ? <Preloader/> :
            users.map(u => <UserCard key={u.id}
                                     user={u}
                                     toggleFollow={toggleFollow}
                                     followingInProgress={followingInProgress}/>)
          }
        </div>
      </Field>
      <div className={s.friends__aside}>
        <Paginator pagination={pagination} currentPage={currentPage} changePage={changePage} pageSize={pageSize}/>
      </div>
    </section>
  )
};

export const Friends = compose(
  connect(mapStateToProps, {changePage, toggleFollow, changeUsersFetchingStatus}),
  HOC.withRedirect('/login'),
)(FriendsStateless);
