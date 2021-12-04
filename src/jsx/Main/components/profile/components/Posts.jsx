import React from "react";

class Posts extends React.Component {
    render() {
        return (
            <section className="main__posts posts">
                <h2 className="posts__title">My posts</h2>
                <div className="posts__new">
                </div>
                <div className="posts__list">
                    <div className="posts__post">Пост 1</div>
                    <div className="posts__post">Пост 2</div>
                    <div className="posts__post">Пост 3</div>
                </div>
            </section>
        );
    }
}

export default Posts;