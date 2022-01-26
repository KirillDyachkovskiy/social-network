import {connect} from 'react-redux';
import {HOC} from '../../hoc';
import {compose} from 'redux';
import {getMenu, getMessages, sendMessage} from '../../../services/redux/reducer/messengerReducer';
import c from './Messenger.module.scss'
import {Messages} from './Messages'
import {Submit} from '../../ui/Submit';
import {NavLink} from "react-router-dom";
import {Sidebar} from "../../ui/Sidebar";

const mapStateToProps = (state) => ({
  menu: getMenu(state),
  messages: getMessages(state),
})

const MessengerStateless = ({menu, messages, sendMessage}) => {
  return (
    <section className={c.messenger}>
      <div className={c.content}>
        <Messages messages={messages}/>
        <Submit placeholder='Write a message' onSubmit={sendMessage}>
          Send
        </Submit>
      </div>
      <Sidebar items={menu}/>
    </section>
  )
};

export const Messenger = compose(
  connect(mapStateToProps, {sendMessage}),
  HOC.withRedirect('/login'),
)(MessengerStateless);
