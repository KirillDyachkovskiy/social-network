import c from "./Post.module.scss";

import { Header } from "./Header";
import { Footer } from "./Footer";

const Post = (props) => {
    const { text, likes } = props;
    return (
        <section className={c.post}>
            <Header />
            <div className={c.content}>
                <p>{text}</p>
            </div>
            <Footer likes={likes} />
        </section>
    );
}


export { Post };