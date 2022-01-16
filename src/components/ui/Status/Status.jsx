import { compose } from 'redux';
import { connect } from 'react-redux'
import { StatusStateless } from './StatusStateless';
// import { changeAuthedUserStatus } from '../../../redux/reducer/profileReducer';
import { Component } from 'react';

const mapStateToProps = (state) => ({
    // status: state.profile.visitedProfile?.status
})

class StatusCombine extends Component {
    state = {
        editMode: false,
    };
    toggeEditMode = () => {
        this.setState({
            editMode: !this.state.editMode,
        })
    };
    render() {
        return (
            <StatusStateless
                // status={this.props.status || this.state.status}
                status={this.props.status}
                editMode={this.state.editMode}
                toggeEditMode={this.toggeEditMode}
                changeAuthedUserStatus={this.props.changeAuthedUserStatus} />
        );
    }
}


// user change status
export const Status = compose(
    connect(mapStateToProps)
)(StatusCombine)
