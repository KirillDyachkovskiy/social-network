import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { compose } from 'redux';
import Preloader from '../../ui/Preloader';
import {
  addPost,
  changeProfileAvatar,
  changeProfileInfo,
  changeVisitedProfile,
  deletePost,
  getPosts,
  getVisitedProfile,
  changeProfileStatus,
  UserPost,
} from '../../services/redux/reducer/profileReducer';
import withRedirect from '../../hoc';
import ProfileCard from '../../components/ProfileCard';
import Image from '../../ui/Image';
import ProfileWall from '../../components/ProfileWall';
import s from './profile.module.scss';
import { ANON_USER_COVER } from '../../constants';
import { getUserData } from '../../services/redux/reducer/authReducer';
import {
  AuthData,
  ProfileInfoPayload,
  TAvatar,
  TStatus,
  UserId,
} from '../../types/Api';
import { RootState } from '../../services/redux/store';

const mapStateToProps = (state: RootState) => ({
  authedUserData: getUserData(state),
  visitedProfile: getVisitedProfile(state),
  posts: getPosts(state),
});

type TStateProps = {
  authedUserData: AuthData;
  visitedProfile: any;
  posts: Array<UserPost>;
};

type TDispatchProps = {
  changeVisitedProfile: (id: UserId) => void;
  changeProfileStatus: (status: TStatus) => void;
  changeProfileAvatar: (avatar: TAvatar) => void;
  changeProfileInfo: (info: ProfileInfoPayload) => void;
  addPost: (text: string) => void;
  deletePost: (id: number) => void;
};

type TProfile = TStateProps & TDispatchProps;

function Profile({
  changeVisitedProfile,
  authedUserData,
  visitedProfile,
  changeProfileStatus,
  changeProfileAvatar,
  changeProfileInfo,
  posts,
  addPost,
  deletePost,
}: TProfile) {
  const { id = authedUserData.id } = useParams();

  useEffect(() => {
    if (id) {
      changeVisitedProfile(+id);
    }
  }, [id, changeVisitedProfile]);

  if (!visitedProfile) {
    return <Preloader />;
  }

  return (
    <section className={s.profile}>
      <div className={s.profile__cover}>
        <Image src={ANON_USER_COVER} alt='обложка пользователя' />
      </div>
      <ProfileCard
        visitedProfile={visitedProfile}
        changeProfileAvatar={changeProfileAvatar}
        changeProfileInfo={changeProfileInfo}
        isOwner={id === authedUserData.id}
        changeProfileStatus={changeProfileStatus}
      />
      <ProfileWall
        isOwner={id === authedUserData.id}
        name={visitedProfile.fullName}
        photo={visitedProfile.photos?.small}
        posts={posts}
        addPost={addPost}
        deletePost={deletePost}
      />
    </section>
  );
}

export default compose(
  connect<TStateProps, TDispatchProps, any, RootState>(mapStateToProps, {
    changeVisitedProfile,
    changeProfileStatus,
    addPost,
    deletePost,
    changeProfileAvatar,
    changeProfileInfo,
  }),
  withRedirect
)(Profile);
