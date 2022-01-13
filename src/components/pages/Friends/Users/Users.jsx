import { connect } from 'react-redux';
import { changePage, setUsersList, toggleFollow } from '../../../../redux/reducer/friendsReducer';
import { UsersStateless } from './UsersStateless';
import { Preloader } from '../../../ui/Preloader'
import React, { Component } from 'react';

const mapStateToProps = (state) => ({
    users: state.friends.users,
    pageSize: state.friends.pageSize,
    currentPage: state.friends.currentPage,
    followingInProgress: state.friends.followingInProgress,
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
                {(this.props.users.length)
                    ? <UsersStateless
                        users={this.props.users}
                        toggleFollow={this.props.toggleFollow}
                        followingInProgress={this.props.followingInProgress} />
                    : <Preloader color='blue' />}
            </>
        )
    }
}

export const Users = connect(
    mapStateToProps,
    {
        changePage,
        setUsersList,
        toggleFollow,
    }
)(UsersCombine);
