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

  function toggleEditMode() {
    if (editMode && changeStatus) {
      changeStatus(localStatus);
    }
    setEditMode(!editMode);
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setLocalStatus(event.target.value);
  }

  if (!changeStatus) {
    return <p className={s.label}>{status}</p>;
  }

  return (
    <div className={s.status}>
      {editMode ? (
        <input
          className={s.input}
          value={localStatus}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
          onBlur={() => {
            toggleEditMode();
          }}
        />
      ) : (
        <p className={s.label} onDoubleClick={toggleEditMode}>
          {status}
        </p>
      )}
    </div>
  );
}
