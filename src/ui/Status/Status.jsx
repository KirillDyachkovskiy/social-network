import {compose} from 'redux';
import {connect} from 'react-redux'
import {changeAuthedUserStatus} from '../../services/redux/reducer/profileReducer';
import {useEffect, useState} from 'react';
import s from "./status.module.scss";
import {ANON_USER_STATUS} from "../../constants";

const StatusCombine = ({status, changeAuthedUserStatus, isOwner = false}) => {
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

  return <div className={s.status}>
    {(isOwner)
      ? (editMode) ? <input
          className={s.input}
          autoFocus
          value={localStatus}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => {
            toggleEditMode()
          }}/>
        : <p
          className={s.label}
          onDoubleClick={() => toggleEditMode()}>
          {status || ANON_USER_STATUS}
        </p> : <p className={s.label}>{status || ANON_USER_STATUS}</p>}
  </div>
}

export const Status = compose(
  connect(null, {changeAuthedUserStatus})
)(StatusCombine)
