import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ActionCreator, compose } from 'redux';
import Preloader from '../../ui/Preloader';
import {
  addPost, changeProfileAvatar, changeProfileInfo,
  changeProfileFetchingStatus,
  changeVisitedProfile,
  deletePost,
  getPosts,
  getProfileIsFetching,
  getVisitedProfile, changeProfileStatus, UserPost,
} from '../../services/redux/reducer/profileReducer';
import withRedirect from '../../hoc';
import ProfileCard from '../../components/ProfileCard';
import Image from '../../ui/Image';
import ProfileWall from '../../components/ProfileWall';
import s from './profile.module.scss';
import { ANON_USER_COVER } from '../../constants';
import { getUserData } from '../../services/redux/reducer/authReducer';
import { AuthData } from '../../types/Api';

const mapStateToProps = (state: any) => ({
  isFetching: getProfileIsFetching(state),
  visitedProfile: getVisitedProfile(state),
  authedUser: getUserData(state),
  posts: getPosts(state),
});

interface IProfile {
  changeProfileFetchingStatus: ActionCreator<any>;
  changeVisitedProfile: ActionCreator<any>;
  authedUser: AuthData;
  visitedProfile: any;
  changeProfileStatus: ActionCreator<any>;
  changeProfileAvatar: ActionCreator<any>;
  changeProfileInfo: ActionCreator<any>;
  posts: Array<UserPost>;
  isFetching: boolean;
  addPost: ActionCreator<any>;
  deletePost: ActionCreator<any>;
}

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
}: IProfile) {
  const { id = authedUser?.id } = useParams();

  useEffect(() => {
    changeProfileFetchingStatus(true);
    changeVisitedProfile(id);
  }, [id, changeVisitedProfile, changeProfileFetchingStatus]);

  if (isFetching) {
    return <Preloader />;
  }

  const { fullName, photos: { small: photo } } = visitedProfile;

  return (
    <section className={s.profile}>
      <div className={s.profile__cover}>
        <Image src={ANON_USER_COVER} alt="обложка пользователя" />
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

export default compose(connect(mapStateToProps, {
  changeProfileFetchingStatus,
  changeVisitedProfile,
  changeProfileStatus,
  addPost,
  deletePost,
  changeProfileAvatar,
  changeProfileInfo,
  // @ts-ignore
}), withRedirect)(Profile);
