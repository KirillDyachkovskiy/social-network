import { useParams } from 'react-router-dom';
import { ProfileCard, ProfileWall, withRedirect } from '../../components';
import { Image, Preloader } from '../../ui';
import cover from '../../assets/images/default_cover.jpg';
import s from './profile.module.scss';
import {
  useAuthMeQuery,
  useUserInfoQuery,
  useUserStatusQuery,
} from '../../../data/hooks';

function Profile() {
  const { data } = useAuthMeQuery();
  const authedId = data?.data?.id;
  const { id = authedId } = useParams();

  const { data: profile } = useUserInfoQuery(id as number);
  const { data: status } = useUserStatusQuery(id as number);

  if (!profile) {
    return <Preloader />;
  }

  const visitedProfile = {
    ...profile,
    userId: Number(id),
    status,
  };

  return (
    <section className={s.profile}>
      <div className={s.profile__cover}>
        <Image src={cover} alt='обложка пользователя' />
      </div>
      <ProfileCard visitedProfile={visitedProfile} isOwner={id === authedId} />
      <ProfileWall
        isOwner={id === authedId}
        name={visitedProfile.fullName || undefined}
        photo={visitedProfile.photos.small || undefined}
      />
    </section>
  );
}

export default withRedirect(Profile);
