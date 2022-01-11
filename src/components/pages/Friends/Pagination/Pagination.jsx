import { connect } from 'react-redux';
import { setCurrentPage, setUsersList, toggleFetching } from '../../../../redux/reducer/friendsReducer';
import * as axios from 'axios';
import React, { Component } from 'react';
import { PaginationStateless } from './PaginationStateless';

const mapStateToProps = (state) => ({
    pageSize: state.friends.pageSize,
    totalCount: state.friends.totalCount,
    currentPage: state.friends.currentPage,
});

class UsersCombine extends Component {
    onPageChanged(pageNumber) {
        this.props.setUsersList();
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching();

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(({ data }) => {
                this.props.toggleFetching();
                this.props.setUsersList(data.items);
            });
    }
    render() {
        return (
            <PaginationStateless totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged.bind(this)} />
        )
    }
}

export const Pagination = connect(
    mapStateToProps,
    {
        setUsersList,
        setCurrentPage,
        toggleFetching,
    }
)(UsersCombine);
