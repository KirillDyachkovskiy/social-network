import * as axios from 'axios';
import { User } from './User';
import c from './Users.module.scss';
import React, { Component } from 'react'

export class UsersStateless extends Component {
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(({ data }) => {
                this.props.setUsersList(data.items);
            });
    }
    componentWillUnmount() {
        alert("Прощай...")
    }
    getList() {
        return this.props.users.map(u => <User key={u.id} user={u} onButtonClick={this.props.onButtonClick} />);
    }
    render() {
        return (
            <div className={c.users}>
                {this.getList()}
            </div>
        )
    }
}
