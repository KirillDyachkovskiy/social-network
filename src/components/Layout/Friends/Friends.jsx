import {connect} from 'react-redux';
import {compose} from 'redux';
import {HOC} from '../../hoc';
import {Users} from "./Users";
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
} from "../../../services/redux/reducer/friendsReducer";
import {useEffect} from "react";
import Preloader from "../../ui/Preloader";
import c from "./Friends.module.scss";
import {Sidebar} from "../../ui/Sidebar";

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
                            ...usersProps
                          }) => {
  useEffect(() => {
    changePage(currentPage, pageSize);
  }, [])

  useEffect(() => () => {
    changeUsersFetchingStatus(true)
  }, [])

  return (
    <section className={c.friends}>
      <div className={c.content}>
        {isFetching ? <Preloader/> : <Users {...usersProps}/>}
      </div>
      <Sidebar items={pagination} currentPage={currentPage} changePage={changePage} pageSize={pageSize} />
    </section>
  )
};

export const Friends = compose(
  connect(mapStateToProps, {changePage, toggleFollow, changeUsersFetchingStatus}),
  HOC.withRedirect('/login'),
)(FriendsStateless);
