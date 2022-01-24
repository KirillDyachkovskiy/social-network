import {connect} from 'react-redux';
import {HOC} from '../../hoc';
import {compose} from 'redux';
import {sendMessage} from '../../../services/redux/reducer/messengerReducer';
import c from './Messenger.module.scss'
import {Messages} from './Messages'
import {SamplePage} from '../../Auth/Layout/SamplePage'
import {Submit} from '../../ui/Submit';
import {getMenu, getMessages} from "../../../services/selectors";

const mapStateToProps = (state) => ({
  menu: getMenu(state),
  messages: getMessages(state),
})

const MessengerStateless = ({menu, messages, sendMessage}) => {
  return (
    <SamplePage menu={menu}>
      <div className={c.content}>
        <Messages messages={messages}/>
        <Submit placeholder='Write a message' onSubmit={sendMessage}>
          Send
        </Submit>
      </div>
    </SamplePage>
  )
};

export const Messenger = compose(
  connect(mapStateToProps, {sendMessage}),
  HOC.withRedirect('/login'),
)(MessengerStateless);
