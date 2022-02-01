import c from './Contacts.module.scss';
import {useState} from "react";
import {Button} from "../../../../ui/Button";
import {useForm} from "react-hook-form";

export const Contacts = ({contacts = {}}) => {
  const {register, handleSubmit, formState: {isValid}} = useForm({
    mode: 'onBlur',
  });
  const [editMode, setEditMode] = useState(false);

  if (editMode) {
    const onSubmit = (data) => {
      console.log(data)
    }

    return (
      <form className={c.contacts}
          onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(contacts).map(key =>(
            <div>
              <span>{key}</span>
              <input {...register(key)} />
            </div>
            )
          )}
          <Button disabled={!isValid}>Save</Button>
        </form>
    )
  }

  return (
    <section className={c.contacts}>
      {Object.keys(contacts).map(key => <div>
        <span>{key}:</span>
        <span>{contacts[key]}</span>
      </div>)}
      <Button onClick={() => setEditMode(true)}>Edit</Button>
    </section>
  )
}
