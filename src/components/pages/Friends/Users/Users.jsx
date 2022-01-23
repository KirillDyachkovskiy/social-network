import {connect} from 'react-redux';
import {compose} from 'redux'
import {changePage, setUsersList, toggleFollow} from '../../../../services/redux/reducer/friendsReducer';
import Preloader from '../../../ui/Preloader'
import React, {Component} from 'react';
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

class UsersCombine extends Component {
    componentDidMount() {
        this.props.changePage(this.props.currentPage, this.props.pageSize);
    }

    componentWillUnmount() {
        this.props.setUsersList();
    }

    render() {
        return (
            <>
                {(this.props.isFetching)
                    ? <Preloader color='blue'/>
                    : <div className={c.users}>
                        {this.props.users.map(u => <User key={u.id}
                                                         user={u}
                                                         toggleFollow={this.props.toggleFollow}
                                                         followingInProgress={this.props.followingInProgress}/>)}
                    </div>}
            </>
        )
    }
}

export const Users = compose(
    connect(mapStateToProps, {changePage, setUsersList, toggleFollow,})
)(UsersCombine);
