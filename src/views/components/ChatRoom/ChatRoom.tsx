import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getMessages } from '../../../services/redux/reducers/chatReducer';
import Field from '../../ui/Field';
import { getUserData } from '../../../services/redux/reducers/authReducer';
import { TMessage } from '../../../services/protocol/Websocket';
import Message from '../../ui/Message';
import s from './chatRoom.module.scss';

export default function ChatRoom() {
  const { id: authedUserId } = useSelector(getUserData);
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
  );
}
