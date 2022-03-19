import {connect} from 'react-redux';
import {compose} from 'redux';
import {HOC} from '../../../hoc';
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
import Preloader from "../../../ui/Preloader";
import {Paginator} from "../../../ui/Paginator";
import {Field} from "../../../ui/Field";

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
    <section style={{display: 'inline-flex', height: '100%'}}>
      <div style={{width: '576px', marginRight: '10px'}}>
        <Field>
          {isFetching ? <Preloader/> : <Users {...usersProps}/>}
        </Field>
      </div>
      <div style={{width: '230px', alignSelf: 'flex-start'}}>
          <Paginator pagination={pagination} currentPage={currentPage} changePage={changePage} pageSize={pageSize}/>
      </div>
    </section>
  )
};

export const Friends = compose(
  connect(mapStateToProps, {changePage, toggleFollow, changeUsersFetchingStatus}),
  HOC.withRedirect('/login'),
)(FriendsStateless);
