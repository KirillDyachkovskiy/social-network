import classNames from "./Post.module.scss";

import { Header } from "./Header";
import { Footer } from "./Footer";

const Post = (props) => {
    return (
        <section className={classNames.post}>
            <Header />
            <div className={classNames.content}>
                <p>{props.message}</p>
            </div>
            <Footer likes={props.likes} />
        </section>
    );
}


export { Post };