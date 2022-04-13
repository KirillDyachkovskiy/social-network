import { useSelector } from 'react-redux';
import { TMessage } from '../../services/redux/reducers/chatReducer';
import Field from '../../ui/Field';
import { getUserData } from '../../services/redux/reducers/authReducer';
import Message from '../../ui/Message';
import s from './chatRoom.module.scss';

interface IChatRoom {
  messages: any;
}

export default function ChatRoom({ messages }: IChatRoom) {
  const { id: authedUserId } = useSelector(getUserData);

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
    </Field>
  );
}
