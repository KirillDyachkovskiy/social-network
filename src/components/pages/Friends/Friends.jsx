import {connect} from 'react-redux';
import {compose} from 'redux';
import {HOC} from '../../hoc';
import {SamplePage} from "../../Auth/Layout/SamplePage";
import {Users} from "./Users";
import {Title} from "../../ui/Title";
import {changePage, changeUsersFetchingStatus, toggleFollow} from "../../../services/redux/reducer/friendsReducer";
import {
  getCurrentPage,
  getFollowingInProgress,
  getFriendsIsFetching,
  getPageSize,
  getPagination,
  getUsers
} from "../../../services/selectors";
import {useEffect} from "react";
import Preloader from "../../ui/Preloader";

const mapStateToProps = (state) => ({
  isFetching: getFriendsIsFetching(state),
  users: getUsers(state),
  followingInProgress: getFollowingInProgress(state),
  pageSize: getPageSize(state),
  currentPage: getCurrentPage(state),
  pagination: getPagination(state),
});

const FriendsStateless = ({pagination, currentPage, pageSize, changePage, isFetching, changeUsersFetchingStatus, ...usersProps}) => {
  useEffect(() => {
    changePage(currentPage, pageSize);
  }, [])

  useEffect(() => () => {
    changeUsersFetchingStatus(true)
  }, [])

  return (
    <SamplePage menu={pagination} onClick={(page) => changePage(page, pageSize)} currentPage={currentPage}>
      <div>
        <Title>Users</Title>
        {isFetching ? <Preloader /> : <Users {...usersProps}/>}
      </div>
    </SamplePage>
  )
};

export const Friends = compose(
  connect(mapStateToProps, {changePage, toggleFollow, changeUsersFetchingStatus}),
  HOC.withRedirect('/login'),
)(FriendsStateless);
