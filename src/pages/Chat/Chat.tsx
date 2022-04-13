import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import withRedirect from '../../components/withRedirect';
import {
  getMessages,
  sendMessage,
  startMessageListening,
  stopMessageListening,
} from '../../services/redux/reducers/chatReducer';
import Submit from '../../ui/Submit';
import Field from '../../ui/Field';
import s from './chat.module.scss';
import ChatRoom from '../../components/ChatRoom/ChatRoom';

function Chat() {
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
  }, [messages]);

  return (
    <section>
      <div className={s.chat__content}>
        <ChatRoom messages={messages} />
        <div ref={messagesEndRef} />
        <div className={s.chat__submit}>
          <Field>
            <Submit
              reset
              required
              placeholder='Write a message'
              onSubmit={(text: string) => dispatch(sendMessage(text))}
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
