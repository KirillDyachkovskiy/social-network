import classNames from "./Posts.module.scss";

import { Title } from "./Title";
import { Submit } from "./Submit";
import { Wall } from "./Wall";

const Posts = () => (
    <section className={classNames.posts}>
        <Submit />
        <Title />
        <Wall />
    </section>
);

export { Posts };