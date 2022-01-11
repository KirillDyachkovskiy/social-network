import c from './Messenger.module.scss'
import { Messages } from './Messages'
import { SubmitMessage } from './SubmitMessage';
import { SamplePage } from '../../layout/Main/SamplePage'

export const MessengerStateless = ({ menu }) => {
    return (
        <SamplePage menu={menu}>
            <div className={c.content}>
                <Messages />
                <SubmitMessage />
            </div>
        </SamplePage>
    )
};
