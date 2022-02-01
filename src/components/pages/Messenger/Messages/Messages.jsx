import c from './Messages.module.scss';
import {Field} from "../../../ui/Field";

export const Messages = ({messages}) => {
  return (
    <section className={c.messages}>
      <div></div>
      {messages.map(m => (
        <div key={m.id} className={`${c.message} ${(m.sender === 0) ? c.to : c.from}`}>
          <Field>
            {m.text}
          </Field>
        </div>
      )
      )}
    </section>
  )
}
