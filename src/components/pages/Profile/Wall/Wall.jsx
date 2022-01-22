import c from './Wall.module.scss';
import { Posts } from './Posts';
import {Title} from "../../../ui/Title";

export const Wall = ({ renderSubmit }) => {
  return (
    <section className={c.wall}>
      <div>
        {renderSubmit()}
      </div>
        <Title>My posts</Title>
      <Posts />
    </section>
  );
};
