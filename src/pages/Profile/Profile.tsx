import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { compose } from 'redux';
import Preloader from '../../ui/Preloader';
import {
  addPost,
  changeProfileAvatar,
  changeProfileInfo,
  changeProfileFetchingStatus,
  changeVisitedProfile,
  deletePost,
  getPosts,
  getProfileIsFetching,
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
import { TState } from '../../services/redux/store';

const mapStateToProps = (state: TState) => ({
  isFetching: getProfileIsFetching(state),
  visitedProfile: getVisitedProfile(state),
  authedUser: getUserData(state),
  posts: getPosts(state),
});

type TStateProps = {
  authedUser: AuthData;
  visitedProfile: any;
  posts: Array<UserPost>;
  isFetching: boolean;
};

type TDispatchProps = {
  changeProfileFetchingStatus: (isFetching: boolean) => void;
  changeVisitedProfile: (id: UserId) => void;
  changeProfileStatus: (status: TStatus) => void;
  changeProfileAvatar: (avatar: TAvatar) => void;
  changeProfileInfo: (info: ProfileInfoPayload) => void;
  addPost: (text: string) => void;
  deletePost: (id: number) => void;
};

type TProfile = TStateProps & TDispatchProps;

function Profile({
  changeProfileFetchingStatus,
  changeVisitedProfile,
  authedUser,
  visitedProfile,
  changeProfileStatus,
  changeProfileAvatar,
  changeProfileInfo,
  posts,
  isFetching,
  addPost,
  deletePost,
}: TProfile) {
  const { id = authedUser?.id } = useParams();

  useEffect(() => {
    changeProfileFetchingStatus(true);
    changeVisitedProfile(+id);
  }, [id, changeVisitedProfile, changeProfileFetchingStatus]);

  if (isFetching) {
    return <Preloader />;
  }

  const {
    fullName,
    photos: { small: photo },
  } = visitedProfile;

  return (
    <section className={s.profile}>
      <div className={s.profile__cover}>
        <Image src={ANON_USER_COVER} alt='обложка пользователя' />
      </div>
      <ProfileCard
        visitedProfile={visitedProfile}
        changeProfileAvatar={changeProfileAvatar}
        changeProfileInfo={changeProfileInfo}
        isOwner={id === authedUser.id}
        changeProfileStatus={changeProfileStatus}
      />
      <ProfileWall
        isOwner={id === authedUser.id}
        name={fullName}
        photo={photo}
        posts={posts}
        addPost={addPost}
        deletePost={deletePost}
      />
    </section>
  );
}

export default compose(
  // @ts-ignore
  connect<TStateProps, TDispatchProps, any, TState>(mapStateToProps, {
    changeProfileFetchingStatus,
    changeVisitedProfile,
    changeProfileStatus,
    addPost,
    deletePost,
    changeProfileAvatar,
    changeProfileInfo,
  }),
  withRedirect
)(Profile);
