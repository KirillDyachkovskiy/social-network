import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { TMessage } from '../../../data/api/Websocket';
import { getMessages } from '../../../data/redux/reducers/chatReducer';
import { Field, Message } from '../../ui';
import s from './chatRoom.module.scss';
import { useAuth } from '../../../data/hooks';

function ChatRoom() {
  const { user } = useAuth();
  const authedId = user?.id;
  const messages = useSelector(getMessages);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Field>
      <div className={s.chatRoom}>
        {messages.map((message: TMessage, id: number) => (
          <Message
            key={id}
            sender={message.userId}
            type={message.userId === authedId ? 'to' : 'from'}
            name={message.userName}
            photo={message.photo}
          >
            {message.message}
          </Message>
        ))}
      </div>
      <div ref={messagesEndRef} />
    </Field>
  );
}

export default ChatRoom;
