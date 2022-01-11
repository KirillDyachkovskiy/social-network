import c from './Posts.module.scss';

import { Post } from './Post/Post';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ posts: state.profile.posts, })

const PostsStateless = ({ posts }) => (
    <section className={c.posts} >
        {posts.map(p => <Post key={p.id} likes={p.likes} text={p.text} />).reverse()}
    </section >
)

export const Posts = connect(mapStateToProps)(PostsStateless);
