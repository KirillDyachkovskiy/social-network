import c from "./Content.module.scss";

const Content = () => (
    <section className={c.content}>
        <div className="messages">
            <div className="message">Hi</div>
            <div className="message">I'm glad to see you</div>
            <div className="message">W
                e'll go to the gum tomorrow</div>
        </div>
    </section>
);

export { Content };