import { connect } from 'react-redux';
import { setUsersList, toggleFetching, toggleFriend } from '../../../../redux/reducer/friendsReducer';
import { UsersStateless } from './UsersStateless';
import { Preloader } from '../../../ui/Preloader'
import * as axios from 'axios';
import React, { Component } from 'react';

const mapStateToProps = (state) => ({
    users: state.friends.users,
    pageSize: state.friends.pageSize,
    currentPage: state.friends.currentPage,
    isFetching: state.friends.isFetching,
});

class UsersCombine extends Component {
    componentDidMount() {
        this.props.setUsersList();
        this.props.toggleFetching();

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(({ data }) => {
                this.props.toggleFetching();
                this.props.setUsersList(data.items, data.totalCount);
            });
    }
    render() {
        return (
            <>
                {(this.props.isFetching) ? <Preloader /> : null}
                <UsersStateless users={this.props.users} onClick={this.props.toggleFriend} />
            </>
        )
    }
}

export const Users = connect(
    mapStateToProps,
    {
        toggleFriend,
        setUsersList,
        toggleFetching,
    }
)(UsersCombine);
