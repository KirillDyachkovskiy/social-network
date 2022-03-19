import {connect} from 'react-redux';
import {HOC} from '../../hoc';
import {compose} from 'redux';
import {getMenu, getMessages, sendMessage} from '../../services/redux/reducer/messengerReducer';
import {Submit} from '../../components/Submit';
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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  };

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <section className={s.messenger}>
      <Field>
        <div className={s.messenger__content}>
          <section className={s.messenger__correspondence}>
            {messages.map(m => (
                <div key={m.id}
                     className={`${s.messenger__message} ${(m.sender === 0) ? s.messenger__message_to : s.messenger__message_from}`}>
                  <Field color={m.sender === 0 ? 'grey' : 'blue'}>{m.text}</Field>
                </div>
              )
            )}
            <div ref={messagesEndRef} />
          </section>
          <div className={s.messenger__submit}>
            <Submit placeholder='Write a message' onSubmit={sendMessage}>
              Send
            </Submit>
          </div>
        </div>
      </Field>
      <div className={s.messenger__aside}>
        <Sidebar items={menu}/>
      </div>
    </section>
  )
};

export const Messenger = compose(
  connect(mapStateToProps, {sendMessage}),
  HOC.withRedirect('/login'),
)(MessengerStateless);
