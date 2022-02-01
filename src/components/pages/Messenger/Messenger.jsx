import {connect} from 'react-redux';
import {HOC} from '../../hoc';
import {compose} from 'redux';
import {getMenu, getMessages, sendMessage} from '../../../services/redux/reducer/messengerReducer';
import {Messages} from './Messages'
import {Submit} from '../../ui/Submit';
import {Sidebar} from "../../ui/Sidebar";
import {Field} from "../../ui/Field";

const mapStateToProps = (state) => ({
  menu: getMenu(state),
  messages: getMessages(state),
})

const MessengerStateless = ({menu, messages, sendMessage}) => {
  return (
    <section style={{display: 'inline-flex', height: '100%'}}>
      <Field style={{width: '576px', marginRight: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'end'}}>
          <Messages messages={messages}/>
        <Field style={{border: '0', padding: '10px 0 0'}}>
          <Submit placeholder='Write a message' onSubmit={sendMessage}>
            Send
          </Submit>
        </Field>
      </Field>
      <Field style={{width: '230px', alignSelf: 'flex-start'}}>
        <Sidebar items={menu}/>
      </Field>
    </section>
  )
};

export const Messenger = compose(
  connect(mapStateToProps, {sendMessage}),
  HOC.withRedirect('/login'),
)(MessengerStateless);
