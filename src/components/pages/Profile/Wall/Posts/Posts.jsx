import c from './Posts.module.scss';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { Post } from './Post';

const mapStateToProps = (state) => ({ posts: state.profile.posts, })

const PostsStateless = ({ posts }) => (
    <section className={c.posts} >
        {posts.map(p => <Post key={p.id} likes={p.likes} text={p.text} />).reverse()}
    </section >
)

export const Posts = compose(
    connect(mapStateToProps)
)(PostsStateless);
