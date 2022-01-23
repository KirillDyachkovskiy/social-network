import {connect} from 'react-redux';
import {compose} from 'redux'
import {changePage, toggleFollow} from '../../../../services/redux/reducer/friendsReducer';
import Preloader from '../../../ui/Preloader'
import {useEffect} from 'react';
import c from "./Users.module.scss";
import {User} from "./User";
import {
  getCurrentPage,
  getFollowingInProgress,
  getFriendsIsFetching,
  getPageSize,
  getUsers
} from "../../../../services/selectors";

const mapStateToProps = (state) => ({
  users: getUsers(state),
  isFetching: getFriendsIsFetching(state),
  pageSize: getPageSize(state),
  currentPage: getCurrentPage(state),
  followingInProgress: getFollowingInProgress(state),
});

const UsersCombine = ({
                        users,
                        isFetching,
                        pageSize,
                        currentPage,
                        followingInProgress,
                        changePage,
                        toggleFollow
                      }) => {
  useEffect(() => {
    changePage(currentPage, pageSize);
  }, [])

  return <>
    {(isFetching)
      ? <Preloader color='blue'/>
      : <div className={c.users}>
        {users.map(u => <User key={u.id}
                              user={u}
                              toggleFollow={toggleFollow}
                              followingInProgress={followingInProgress}/>)}
      </div>}
  </>
}

export const Users = compose(
  connect(mapStateToProps, {changePage, toggleFollow,})
)(UsersCombine);
