import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  sendMessage,
  startMessageListening,
  stopMessageListening,
} from '../../../data/redux/reducers/chatReducer';
import { ChatRoom, withRedirect } from '../../components';
import { Field, Submit } from '../../ui';
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
