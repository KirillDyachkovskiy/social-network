import { connect } from 'react-redux';
import { HOC } from '../../hoc';
import { compose } from 'redux';
import { sendMessage } from '../../../services/redux/reducer/messengerReducer';
import c from './Messenger.module.scss'
import { Messages } from './Messages'
import { SamplePage } from '../../Auth/Layout/SamplePage'
import { Submit } from '../../ui/Submit';

const mapStateToProps = (state) => ({
  menu: state.messenger.menu,
})

const MessengerStateless = ({ menu, sendMessage }) => {
  return (
    <SamplePage menu={menu}>
      <div className={c.content}>
        <Messages />
        <Submit placeholder='Write a message' onSubmit={sendMessage}>
          Send
        </Submit>
      </div>
    </SamplePage>
  )
};

export const Messenger = compose(
  connect(mapStateToProps, { sendMessage }),
  HOC.withRedirectToLogin
)(MessengerStateless);
