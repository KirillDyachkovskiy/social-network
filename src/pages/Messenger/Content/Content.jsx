import c from "./Content.module.scss";

const Message = (props) => {
    const { text } = props;
    return (
        <div className="message">{text}</div>
    )
}

const Content = () => (
    <section className={c.content}>
        <div className="messages">
            <Message text="Hi" />
            <Message text="I'm glad to see you" />
            <Message text="We'll go to the gym tomorrow" />
        </div>
    </section>
);

export { Content };