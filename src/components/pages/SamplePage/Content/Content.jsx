import c from "./Content.module.scss"

const Content = ({ children }) => {
    return (
        <section className={c.content}>
            {children}
        </section>
    )
};

export { Content };