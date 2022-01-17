import c from './Profile.module.scss';
import { Card } from './Card';
import { Wall } from './Wall';

export const ProfileStateless = (props) => {
  return (
    <section className={c.profile}>
      <Card {...props.visitedProfile} />
      <Wall renderSubmit={props.renderSubmit} />
    </section>
  )
};
