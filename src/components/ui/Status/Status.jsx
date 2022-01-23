import {compose} from 'redux';
import {connect} from 'react-redux'
import {changeAuthedUserStatus} from '../../../services/redux/reducer/profileReducer';
import {useState, useEffect} from 'react';
import c from "./Status.module.scss";
import {ANON_USER_STATUS} from "../../../constants";

const StatusCombine = ({status, changeAuthedUserStatus}) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  const toggleEditMode = () => {
    if (editMode) {
      changeAuthedUserStatus(status);
    }
    setEditMode(!editMode);
  };

  const onChange = (value) => {
    setLocalStatus(value)
  };

  useEffect(() => {
      setLocalStatus(status)
    }, [status]
  );

  return <div className={c.status}>
    {(editMode)
      ? <input
        className={c.input}
        autoFocus
        value={localStatus}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => {
          toggleEditMode()
        }}/>
      : <p
        className={c.label}
        onDoubleClick={() => toggleEditMode()}>
        {status || ANON_USER_STATUS}
      </p>}
  </div>
}

export const Status = compose(
  connect(null, {changeAuthedUserStatus})
)(StatusCombine)
