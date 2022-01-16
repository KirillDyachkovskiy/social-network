import { connect } from 'react-redux';
import { compose } from 'redux'
import { changePage, setUsersList, toggleFollow } from '../../../../redux/reducer/friendsReducer';
import { UsersStateless } from './UsersStateless';
import { Preloader } from '../../../ui/Preloader'
import React, { Component } from 'react';

const mapStateToProps = (state) => ({
    users: state.friends.users,
    isFetching: state.friends.isFetching,
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
                {(this.props.isFetching)
                    ? <Preloader color='blue' />
                    : <UsersStateless
                        users={this.props.users}
                        toggleFollow={this.props.toggleFollow}
                        followingInProgress={this.props.followingInProgress} />}
            </>
        )
    }
}

export const Users = compose(
    connect(mapStateToProps, { changePage, setUsersList, toggleFollow, })
)(UsersCombine);
