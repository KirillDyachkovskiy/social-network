import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Preloader from '../../ui/Preloader';
import {
  changeVisitedProfile,
  getPosts,
  getVisitedProfile,
} from '../../services/redux/reducer/profileReducer';
import withRedirect from '../../hoc';
import ProfileCard from '../../components/ProfileCard';
import Image from '../../ui/Image';
import ProfileWall from '../../components/ProfileWall';
import s from './profile.module.scss';
import { ANON_USER_COVER } from '../../constants';
import { getUserData } from '../../services/redux/reducer/authReducer';

function Profile() {
  const authedUserData = useSelector(getUserData);
  const visitedProfile = useSelector(getVisitedProfile);
  const posts = useSelector(getPosts);

  const dispatch = useDispatch();

  const { id = authedUserData.id } = useParams();

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
        <Image src={ANON_USER_COVER} alt='обложка пользователя' />
      </div>
      <ProfileCard
        visitedProfile={visitedProfile}
        isOwner={id === authedUserData.id}
      />
      <ProfileWall
        isOwner={id === authedUserData.id}
        name={visitedProfile.fullName || undefined}
        photo={visitedProfile.photos.small || undefined}
        posts={posts}
      />
    </section>
  );
}

export default withRedirect(Profile);
