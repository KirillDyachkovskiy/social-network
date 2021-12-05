import classNames from "./Posts.module.scss";

import { Title } from "./Title";
import { New } from "./New/New";
import { Wall } from "./Wall";

const Posts = () => {
    return (
        <section className={classNames.posts}>
            <New />
            <Title />
            <Wall />
        </section>
    );
}


export { Posts };