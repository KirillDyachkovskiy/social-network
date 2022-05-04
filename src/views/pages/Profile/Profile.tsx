import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  changeVisitedProfile,
  getPosts,
  getVisitedProfile,
} from '../../../data/redux/reducers/profileReducer';
import { getUserData } from '../../../data/redux/reducers/authReducer';
import { ProfileCard, ProfileWall, withRedirect } from '../../components';
import { Image, Preloader } from '../../ui';
import cover from '../../images/default_cover.jpg';
import s from './profile.module.scss';

function Profile() {
  const { id: authedId } = useSelector(getUserData);
  const visitedProfile = useSelector(getVisitedProfile);
  const posts = useSelector(getPosts);

  const dispatch = useDispatch();

  const { id = authedId } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(changeVisitedProfile(+id));
    }
  }, [dispatch, id]);

  if (!visitedProfile.userId) {
    return <Preloader />;
  }

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
        posts={posts}
      />
    </section>
  );
}

export default withRedirect(Profile);
