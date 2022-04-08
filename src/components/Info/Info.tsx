// @ts-nocheck
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import s from './info.module.scss';
import Button from '../../ui/Button';
import { ProfileInfoPayload, UserInfo } from '../../types/Api';

interface IInfo {
  userInfo: UserInfo;
  isOwner: boolean;
  changeInfo: (info: ProfileInfoPayload) => void;
}

export default function Info({ userInfo, isOwner, changeInfo }: IInfo) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      ...userInfo,
      fullName: userInfo.fullName,
    },
  });

  const [editMode, setEditMode] = useState(false);

  const { contacts, ...mainInfo } = userInfo;

  function onSubmit(formData: UserInfo) {
    changeInfo(formData);
    setEditMode(false);
  }

  if (editMode) {
    return (
      <form className={s.info} onSubmit={handleSubmit(onSubmit)}>
        <p className={s.info__subtitle}>Main info</p>
        {Object.keys(mainInfo).map((key) => (
          <div className={s.info__item} key={key}>
            <p className={s.info__p}>{key}:</p>
            <input
              className={s.info__input}
              {...register(key, {
                required: 'Это поле обязательно!',
              })}
            />
            {errors[key] && (
              <p className={s.info__p}>{errors[key]?.message || 'Error!'}</p>
            )}
          </div>
        ))}
        <p className={s.info__subtitle}>Contacts</p>
        {Object.keys(contacts).map((key) => (
          <div className={s.info__item} key={key}>
            <p className={s.info__p}>{key}:</p>
            <input
              className={s.info__input}
              {...register(`contacts.${key}`, {
                pattern: {
                  value:
                    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
                },
              })}
            />
          </div>
        ))}
        <Button type='submit'>Save</Button>
      </form>
    );
  }

  return (
    <section className={s.info}>
      <p className={s.info__subtitle}>Main info</p>
      {Object.keys(mainInfo).map((key) => (
        <div className={s.info__item} key={key}>
          <p className={s.info__p}>{key}:</p>
          <p>{mainInfo[key]}</p>
        </div>
      ))}
      <p className={s.info__subtitle}>Contacts</p>
      {Object.keys(contacts).map((key) => (
        <div className={s.info__item} key={key}>
          <p className={s.info__p}>{key}:</p>
          <p>{contacts[key]}</p>
        </div>
      ))}
      {isOwner && (
        <div className={s.info__button}>
          <Button onClick={() => setEditMode(true)}>Edit</Button>
        </div>
      )}
    </section>
  );
}
