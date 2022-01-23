import c from './Messages.module.scss';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getMessages} from "../../../../services/selectors";

const mapStateToProps = (state) => ({
  messages: getMessages(state),
})

const MessagesStateless = ({messages}) => {
    return (
        <section className={c.messages}>
            <div></div>
            {messages.map(m => <div key={m.id}
                                    className={`${c.message} ${(m.sender === 0) ? c.to : c.from}`}>{m.text}</div>)}
        </section>
    )
}

export const Messages = compose(
    connect(mapStateToProps)
)(MessagesStateless);
