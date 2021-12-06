import classNames from "./Post.module.scss";

import { Header } from "./Header";
import { Footer } from "./Footer";

const Post = () => {
    return (
        <section className={classNames.post}>
            <Header />
            <div className={classNames.content}>
                Тут будет контент
            </div>
            <Footer />
        </section>
    );
}


export { Post };