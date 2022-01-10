import { connect } from 'react-redux';
import { setCurrentPage_AC, setUsersList_AC, toggleFriend_AC } from '../../../../redux/reducer/usersReducer';
import { UsersStateless } from "./UsersStateless";
import * as axios from 'axios';
import React, { Component } from 'react';

const mapStateToProps = (state) => ({
    users: state.users.list,
    pageSize: state.users.pageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
});
const mapDispatchToProps = (dispatch) => ({
    onButtonClick: (id) => dispatch(toggleFriend_AC(id)),
    setUsersList: (users, totalCount) => dispatch(setUsersList_AC(users, totalCount)),
    setCurrentPage: (number) => dispatch(setCurrentPage_AC(number)),
});

class UsersCombine extends Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(({ data }) => {
                this.props.setUsersList(data.items, data.totalCount);
            });
    }
    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(({ data }) => {
                this.props.setUsersList(data.items, data.totalCount);
            });
    }
    render() {
        return (
            <UsersStateless props={this.props} onPageChanged={this.onPageChanged.bind(this)} />
        )
    }
}

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersCombine);
