import c from "./Posts.module.scss";

import { Post } from "./Post/Post";
import { StoreContext } from "../../../../../storeContext";

const Posts = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const postsElement = store.getState().profile.posts.map(p => (<Post key={p.id.toString()} likes={p.likes} text={p.text} />))

                    return (
                        <section className={c.posts} >
                            {postsElement.reverse()}
                        </section >
                    );
                }
            }
        </StoreContext.Consumer>
    )
};

export { Posts };