import { connect } from 'react-redux';
import { setCurrentPage_AC, setUsersList_AC, toggleFetching_AC } from '../../../../redux/reducer/friendsReducer';
import * as axios from 'axios';
import React, { Component } from 'react';
import { PaginationStateless } from './PaginationStateless';

const mapStateToProps = (state) => ({
    pageSize: state.friends.pageSize,
    totalCount: state.friends.totalCount,
    currentPage: state.friends.currentPage,
});
const mapDispatchToProps = (dispatch) => ({
    setUsersList: (users, totalCount) => dispatch(setUsersList_AC(users, totalCount)),
    setCurrentPage: (number) => dispatch(setCurrentPage_AC(number)),
    changeFetchingStatus: () => dispatch(toggleFetching_AC()),
});

class UsersCombine extends Component {
    onPageChanged(pageNumber) {
        this.props.setUsersList();
        this.props.setCurrentPage(pageNumber);
        this.props.changeFetchingStatus();

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(({ data }) => {
                this.props.changeFetchingStatus();
                this.props.setUsersList(data.items);
            });
    }
    render() {
        return (
            <PaginationStateless totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged.bind(this)} />
        )
    }
}

export const Pagination = connect(mapStateToProps, mapDispatchToProps)(UsersCombine);
