import c from './Post.module.scss';
import { PostFooter } from './PostFooter';
import { PostHeader } from './PostHeader';

export const Post = ({ text, likes }) => {
    return (
        <section className={c.post}>
            <PostHeader />
            <div className={c.content}>
                <p>{text}</p>
            </div>
            <PostFooter likes={likes} />
        </section>
    );
}
