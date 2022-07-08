import { ChangeEvent, useEffect, useState } from 'react';
import s from './status.module.scss';

interface IStatus {
  status: string | null;
  changeStatus?: (value: string) => void;
}

export default function Status({ status, changeStatus }: IStatus) {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState<string>(status || '');

  useEffect(() => {
    setLocalStatus(status || '');
  }, [status]);

  if (!changeStatus) {
    return <p className={s.label}>{status}</p>;
  }

  function toggleEditMode() {
    if (editMode) {
      changeStatus?.(localStatus);
    }
    setEditMode(!editMode);
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setLocalStatus(event.target.value);

  return (
    <div className={s.status}>
      {editMode ? (
        <input
          className={s.input}
          value={localStatus}
          onChange={onChange}
          onBlur={toggleEditMode}
        />
      ) : (
        <p className={s.label} onDoubleClick={toggleEditMode}>
          {status}
        </p>
      )}
    </div>
  );
}
