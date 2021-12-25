import * as axios from 'axios';
import { User } from './User';
import c from './Users.module.scss';
import React, { Component } from 'react';

export class UsersStateless extends Component {
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
    getList() {
        return this.props.users.map(u => <User key={u.id} user={u} onButtonClick={this.props.onButtonClick} />);
    }
    render() {
        const pages = [];
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        };
        return (
            <>
                <div className={c.pagination}>
                    {pages
                        .filter((item, id, arr) => (id === 0) || (id <= this.props.currentPage && id >= this.props.currentPage - 2) || (id === arr.length - 1))
                        .map(item => <button type="button"
                            className={(this.props.currentPage === item) && c.selectedPage}
                            onClick={() => this.onPageChanged(item)}
                        >{item}</button>)}
                </div>
                <div className={c.users}>
                    {this.getList()}
                </div>
            </>
        )
    }
}
