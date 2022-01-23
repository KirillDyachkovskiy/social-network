import {compose} from 'redux';
import {connect} from 'react-redux'
import {changeAuthedUserStatus} from '../../../services/redux/reducer/profileReducer';
import {Component} from 'react';
import c from "./Status.module.scss";
import {ANON_USER_STATUS} from "../../../constants";

class StatusCombine extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  toggleEditMode = () => {
    if (this.state.editMode) {
      this.props.changeAuthedUserStatus(this.state.status);
    }
    this.setState({
      editMode: !this.state.editMode,
    });
  };
  onChange = (value) => {
    this.setState({
      status: value,
    })
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  };

  render() {
    return (
      <div className={c.status}>
        {(this.state.editMode)
          ? <input
            className={c.input}
            autoFocus
            value={this.state.status}
            onChange={(e) => this.onChange(e.target.value)}
            onBlur={() => {
              this.toggleEditMode()
            }}/>
          : <p
            className={c.label}
            onDoubleClick={() => this.toggleEditMode()}>
            {this.state.status || ANON_USER_STATUS}
          </p>}
      </div>
    );
  }
}

export const Status = compose(
  connect(null, {changeAuthedUserStatus})
)(StatusCombine)
