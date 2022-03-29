import {compose} from 'redux';
import {connect} from 'react-redux'
import {changeUserStatus} from '../../services/redux/reducer/profileReducer';
import {useEffect, useState} from 'react';
import s from "./status.module.scss";
import {ANON_USER_STATUS} from "../../constants";

const StatusCombine = ({status, changeUserStatus, isOwner = false}) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  function toggleEditMode() {
    if (editMode) {
      changeUserStatus(localStatus);
    }
    setEditMode(!editMode);
  }

  function onChange(value) {
    setLocalStatus(value);
  }

  useEffect(() => {
    setLocalStatus(status);
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
          onDoubleClick={toggleEditMode}>
          {status || ANON_USER_STATUS}
        </p> : <p className={s.label}>{status || ANON_USER_STATUS}</p>}
  </div>
}

export const Status = compose(
  connect(null, {changeUserStatus})
)(StatusCombine)
