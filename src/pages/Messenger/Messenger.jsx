import {connect} from 'react-redux';
import {HOC} from '../../hoc';
import {compose} from 'redux';
import {getMenu, getMessages, sendMessage} from '../../services/redux/reducer/messengerReducer';
import {Submit} from '../../ui/Submit';
import {Sidebar} from "../../ui/Sidebar";
import {Field} from "../../ui/Field";
import s from './messenger.module.scss';
import {useEffect, useRef} from "react";

const mapStateToProps = (state) => ({
  menu: getMenu(state),
  messages: getMessages(state),
})

const MessengerStateless = ({menu, messages, sendMessage}) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
  };

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <section className={s.messenger}>
      <div className={s.messenger__content}>
        <div className={s.messenger__correspondence}>
          <Field>
            <div className={s.messenger__messages}>
              {messages.map(m => (
                  <div key={m.id}
                       className={`${s.messenger__message} ${(m.sender === 0) ? s.messenger__message_to : s.messenger__message_from}`}>
                    <Field color={m.sender === 0 ? 'grey' : 'blue'}>{m.text}</Field>
                  </div>
                )
              )}
            </div>
            <div ref={messagesEndRef}/>
          </Field>
        </div>
        <div className={s.messenger__submit}>
          <Field>
            <Submit placeholder='Write a message' onSubmit={sendMessage}>
              Send
            </Submit>
          </Field>
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
  HOC.withRedirect('/login'),
)(MessengerStateless);
