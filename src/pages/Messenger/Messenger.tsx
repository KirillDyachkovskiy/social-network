import { connect } from 'react-redux';
import { compose } from 'redux';
import { useEffect, useRef } from 'react';
import withRedirect from '../../hoc';
import {
  getMenu,
  getMessages,
  sendMessage,
  TMessage,
} from '../../services/redux/reducer/messengerReducer';
import Submit from '../../components/Submit';
import { Sidebar } from '../../ui/Sidebar';
import Field from '../../ui/Field';
import s from './messenger.module.scss';
import { TState } from '../../services/redux/store';
import { SidebarItem } from '../../types/Api';

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

const mapStateToProps = (state: TState) => ({
  menu: getMenu(state),
  messages: getMessages(state),
});

type TStateProps = {
  menu: Array<SidebarItem>;
  messages: Array<TMessage>;
};

type TDispatchProps = {
  sendMessage: (text: string) => void;
};

type TMessenger = TStateProps & TDispatchProps;

function Messenger({ menu, messages, sendMessage }: TMessenger) {
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
  connect<TStateProps, TDispatchProps, never, TState>(mapStateToProps, {
    sendMessage,
  }),
  withRedirect
)(Messenger);
