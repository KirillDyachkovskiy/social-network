import c from "./Post.module.scss";

import { Header } from "./Header";
import { Footer } from "./Footer";

const Post = (props) => {
    return (
        <section className={c.post}>
            <Header />
            <div className={c.content}>
                <p>{props.message}</p>
            </div>
            <Footer likes={props.likes} />
        </section>
    );
}


export { Post };