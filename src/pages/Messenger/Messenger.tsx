import { connect } from 'react-redux';
import { ActionCreator, compose } from 'redux';
import { useEffect, useRef } from 'react';
import withRedirect from '../../hoc';
import {
  getMenu,
  getMessages,
  MessengerState,
  sendMessage,
} from '../../services/redux/reducer/messengerReducer';
import Submit from '../../components/Submit';
import { Sidebar } from '../../ui/Sidebar';
import Field from '../../ui/Field';
import s from './messenger.module.scss';

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

const mapStateToProps = (state: any) => ({
  menu: getMenu(state),
  messages: getMessages(state),
});

interface IMenu extends MessengerState {
  sendMessage: ActionCreator<any>;
}

function Messenger({ menu, messages, sendMessage }: IMenu) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <section className={s.messenger}>
      <div className={s.messenger__content}>
        <Field>
          <div className={s.messenger__messages}>
            {messages.map((message) => (
              <Message key={message.id} type={message.sender ? 'from' : 'to'}>
                {message.text}
              </Message>
            ))}
          </div>
          <div ref={messagesEndRef} />
        </Field>
        <div className={s.messenger__submit}>
          <Submit placeholder='Write a message' onSubmit={sendMessage}>
            Send
          </Submit>
        </div>
      </div>
      <div className={s.messenger__sidebar}>
        <Sidebar items={menu} />
      </div>
    </section>
  );
}

export default compose(
  connect(mapStateToProps, { sendMessage }),
  withRedirect
  // @ts-ignore
)(Messenger);
