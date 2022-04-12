import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import withRedirect from '../../components/withRedirect';
import {
  getMessages,
  sendMessage,
  TMessage,
} from '../../services/redux/reducers/chatReducer';
import Submit from '../../components/Submit';
import Field from '../../ui/Field';
import s from './chat.module.scss';
import Avatar from '../../ui/Avatar';

interface IMessage {
  type?: 'to' | 'from';
  children: string;
}

function Message({ type = 'to', children }: IMessage) {
  if (type === 'to') {
    return (
      <article className={`${s.message} ${s.message_to}`}>
        <Field color='grey'>{children}</Field>
      </article>
    );
  }

  return (
    <article className={s.message_from}>
      <Avatar size='small' />
      <div className={s.message}>
        <Field color='blue'>{children}</Field>
      </div>
    </article>
  );
}

function Chat() {
  const [messageText, setMessageText] = useState<string>('');

  const messages = useSelector(getMessages);

  const dispatch = useDispatch();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <section>
      <div className={s.chat__content}>
        <Field>
          <div className={s.chat__messages}>
            {messages.map((message: TMessage) => (
              <Message key={message.id} type={message.sender ? 'from' : 'to'}>
                {message.text}
              </Message>
            ))}
          </div>
          <div ref={messagesEndRef} />
        </Field>
        <div className={s.chat__submit}>
          <Field>
            <Submit
              reset
              placeholder='Write a message'
              value={messageText}
              onChange={setMessageText}
              onSubmit={() => dispatch(sendMessage(messageText))}
              disabled={!messageText}
            >
              Send
            </Submit>
          </Field>
        </div>
      </div>
    </section>
  );
}

export default withRedirect(Chat);
