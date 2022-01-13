import c from './Messages.module.scss';
import { compose } from 'redux';
import { Message } from './Message';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ messages: state.messenger.messages, })

const MessagesStateless = ({ messages }) => {
    return (
        <section className={c.messages}>
            <div></div>
            {messages.map(m => <Message key={m.id} id={m.id} sender={m.sender} text={m.text} />)}
        </section>
    )
}

export const Messages = compose(
    connect(mapStateToProps)
)(MessagesStateless);
