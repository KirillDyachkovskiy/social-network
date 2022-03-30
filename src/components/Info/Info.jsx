import c from './Info.module.scss';
import {useState} from "react";
import {Button} from "../../ui/Button";
import {useForm} from "react-hook-form";

export const Info = ({userInfo, isOwner, id, changeUserInfo}) => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: 'onBlur',
    defaultValues: {
      ...userInfo
    },
  });
  
  const [editMode, setEditMode] = useState(false);

  const {fullName, contacts, ...mainInfo} = userInfo;

  function onSubmit(formData) {
    changeUserInfo(id, formData);
    setEditMode(false);
  }

  if (editMode) {
    return (
      <form className={c.info}
            onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span>Nickname:</span>
          <input {...register('fullName', {
            required: 'Это поле обязательно!',
          })} />
        </div>
        <span className={c.subtitle}>Main info</span>
        {Object.keys(mainInfo).map(key => <div key={key}>
          <span>{key}:</span>
          <input {...register(key, {
            required: 'Это поле обязательно!',
          })} />
          {errors[key] && <span>{errors[key]?.message || 'Error!'}</span>}
        </div>)}
        <span className={c.subtitle}>Contacts</span>
        {Object.keys(contacts).map(key => <div key={key}>
          <span>{key}:</span>
          <input {...register(`contacts.${key}`, {
            pattern: {
              value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
            }
          })} />
        </div>)}
        <Button>Save</Button>
      </form>
    )
  }

  return (
    <section className={c.info}>
      <span className={c.subtitle}>Main info</span>
      {Object.keys(mainInfo).map(key => <div key={key}>
        <span>{key}:</span>
        <span>{mainInfo[key]}</span>
      </div>)}
      <span className={c.subtitle}>Contacts</span>
      {Object.keys(contacts).map(key => <div key={key}>
        <span>{key}:</span>
        <span>{contacts[key]}</span>
      </div>)}
      {isOwner && <Button onClick={() => setEditMode(true)}>Edit</Button>}
    </section>
  )
}
