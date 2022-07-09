import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { TMessage } from '../../../data/api/Websocket';
import { getMessages } from '../../../data/redux/reducers/chatReducer';
import { Field, Message } from '../../ui';
import s from './chatRoom.module.scss';
import { useAuthMeQuery } from '../../../data/hooks';

export default function ChatRoom() {
  const { data } = useAuthMeQuery();
  const authedId = data?.data?.id;
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
