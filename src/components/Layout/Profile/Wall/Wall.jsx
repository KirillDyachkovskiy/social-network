import c from './Wall.module.scss';
import {Title} from "../../../ui/Title";

export const Wall = ({renderSubmit, renderPosts}) => {
  return (
    <section className={c.wall}>
      <div>
        {renderSubmit()}
      </div>
      <Title>My posts</Title>
      {renderPosts()}
    </section>
  );
};
