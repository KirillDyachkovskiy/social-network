import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import withRedirect from '../../components/withRedirect';
import {
  sendMessage,
  startMessageListening,
  stopMessageListening,
} from '../../services/redux/reducers/chatReducer';
import Submit from '../../ui/Submit';
import Field from '../../ui/Field';
import ChatRoom from '../../components/ChatRoom/ChatRoom';
import s from './chat.module.scss';

function Chat() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startMessageListening());

    return () => {
      dispatch(stopMessageListening());
    };
  }, [dispatch]);

  return (
    <section>
      <div className={s.chat__content}>
        <ChatRoom />
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
