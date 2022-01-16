import { compose } from 'redux';
import { connect } from 'react-redux'
import { StatusStateless } from './StatusStateless';
import { changeAuthedUserStatus } from '../../../redux/reducer/profileReducer';
import { Component } from 'react';

class StatusCombine extends Component {
    state = {
        editMode: false,
        status: this.props.status,
    };
    toggleEditMode = () => {
        if (this.state.editMode) {
            this.props.changeAuthedUserStatus(this.state.status);
        };
        this.setState({
            editMode: !this.state.editMode,
        });
    };
    onStatusChange = (value) => {
        this.setState({
            status: value,
        })
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        };
    };
    render() {
        return (
            <StatusStateless
                status={this.state.status}
                editMode={this.state.editMode}
                onChange={this.onStatusChange}
                toggleEditMode={this.toggleEditMode} />
        );
    }
}

export const Status = compose(
    connect(null, { changeAuthedUserStatus })
)(StatusCombine)
