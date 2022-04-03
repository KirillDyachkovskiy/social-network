import {connect} from 'react-redux';
import {withRedirect} from '../../hoc';
import {compose} from 'redux';
import {getMenu, getMessages, sendMessage} from '../../services/redux/reducer/messengerReducer';
import Submit from '../../components/Submit';
import {Sidebar} from "../../ui/Sidebar";
import Field from "../../ui/Field";
import {useEffect, useRef} from "react";
import Message from "../../ui/Message";
import s from './messenger.module.scss';

const mapStateToProps = (state) => ({
  menu: getMenu(state),
  messages: getMessages(state),
})

const MessengerStateless = ({menu, messages, sendMessage}) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  }, [messages]);

  return (
    <section className={s.messenger}>
      <div className={s.messenger__content}>
        <Field>
          <div className={s.messenger__messages}>
            {messages.map(message => (
                <Message key={message.id} type={message.sender ? 'from' : 'to'}>{message.text}</Message>
              )
            )}
          </div>
          <div ref={messagesEndRef}/>
        </Field>
        <div className={s.messenger__submit}>
          <Submit placeholder='Write a message' onSubmit={sendMessage}>
            Send
          </Submit>
        </div>
      </div>
      <div className={s.messenger__sidebar}>
        <Sidebar items={menu}/>
      </div>
    </section>
  )
};

export const Messenger = compose(
  connect(mapStateToProps, {sendMessage}),
  withRedirect('/login'),
)(MessengerStateless);
