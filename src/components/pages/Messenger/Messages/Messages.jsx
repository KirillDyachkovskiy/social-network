import c from './Messages.module.scss';
import {compose} from 'redux';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({messages: state.messenger.messages,})

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
