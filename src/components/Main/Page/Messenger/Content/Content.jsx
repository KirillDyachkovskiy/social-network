import classNames from "./Content.module.scss";

const Content = () => {
    return (
        <section className={classNames.content}>
            <div>
                тут будет текущий диалог
            </div>
        </section>
    );
}

export { Content };