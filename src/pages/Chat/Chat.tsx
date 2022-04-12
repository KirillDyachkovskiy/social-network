import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import withRedirect from '../../components/withRedirect';
import {
  getMessages,
  sendMessage,
  startMessageListening,
  stopMessageListening,
  TMessage,
} from '../../services/redux/reducers/chatReducer';
import Submit from '../../components/Submit';
import Field from '../../ui/Field';
import { getUserData } from '../../services/redux/reducers/authReducer';
import Message from '../../ui/Message';
import s from './chat.module.scss';

function Chat() {
  const [messageText, setMessageText] = useState<string>('');
  const { id: authedUserId } = useSelector(getUserData);

  const messages = useSelector(getMessages);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startMessageListening());

    return () => {
      dispatch(stopMessageListening());
    };
  }, [dispatch]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section>
      <div className={s.chat__content}>
        <Field>
          <div className={s.chat__messages}>
            {messages.map((message: TMessage, id: number) => (
              <Message
                key={id}
                sender={message.userId}
                type={message.userId === authedUserId ? 'to' : 'from'}
                name={message.userName}
                photo={message.photo}
              >
                {message.message}
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
              onSubmit={() => dispatch(sendMessage(messageText))}
              onChange={setMessageText}
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
