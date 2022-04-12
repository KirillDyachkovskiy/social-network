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

interface IMessage {
  type?: 'to' | 'from';
  children: string;
}

function Message({ type = 'to', children }: IMessage) {
  return (
    <div className={`${s.message} ${s[`message__${type}`]}`}>
      <Field color={type === 'to' ? 'grey' : 'blue'}>{children}</Field>
    </div>
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
    <section className={s.messenger}>
      <div className={s.messenger__content}>
        <Field>
          <div className={s.messenger__messages}>
            {messages.map((message: TMessage) => (
              <Message key={message.id} type={message.sender ? 'from' : 'to'}>
                {message.text}
              </Message>
            ))}
          </div>
          <div ref={messagesEndRef} />
        </Field>
        <div className={s.messenger__submit}>
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
