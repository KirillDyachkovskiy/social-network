import c from "./Post.module.scss";

import { Header } from "./Header";
import { Footer } from "./Footer";

const Post = (props) => {
    const { message, likes } = props;
    return (
        <section className={c.post}>
            <Header />
            <div className={c.content}>
                <p>{message}</p>
            </div>
            <Footer likes={likes} />
        </section>
    );
}


export { Post };