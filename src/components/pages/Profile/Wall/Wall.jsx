import c from './Wall.module.scss';
import { Title } from './Title';
import { Posts } from './Posts';

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
