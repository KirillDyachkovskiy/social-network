import { connect } from 'react-redux';
import { setUsersList_AC, toggleFetching_AC, toggleFriend_AC } from '../../../../redux/reducer/friendsReducer';
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
const mapDispatchToProps = (dispatch) => ({
    onButtonClick: (id) => dispatch(toggleFriend_AC(id)),
    setUsersList: (users, totalCount) => dispatch(setUsersList_AC(users, totalCount)),
    changeFetchingStatus: () => dispatch(toggleFetching_AC()),
});

class UsersCombine extends Component {
    componentDidMount() {
        this.props.setUsersList();
        this.props.changeFetchingStatus();

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(({ data }) => {
                this.props.changeFetchingStatus();
                this.props.setUsersList(data.items, data.totalCount);
            });
    }
    render() {
        debugger
        return (
            <>
                {(this.props.isFetching) ? <Preloader /> : null}
                <UsersStateless users={this.props.users} onButtonClick={this.props.onButtonClick} />
            </>
        )
    }
}

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersCombine);
