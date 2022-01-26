import c from './Messages.module.scss';

export const Messages = ({messages}) => {
  return (
    <section className={c.messages}>
      <div></div>
      {messages.map(m => <div key={m.id}
                              className={`${c.message} ${(m.sender === 0) ? c.to : c.from}`}>{m.text}</div>)}
    </section>
  )
}
