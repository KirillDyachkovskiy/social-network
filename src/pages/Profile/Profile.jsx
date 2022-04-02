import {
  addPost, changeProfileAvatar, changeProfileInfo,
  changeProfileFetchingStatus,
  changeVisitedProfile,
  deletePost,
  getPosts,
  getProfileIsFetching,
  getVisitedProfile,
} from '../../services/redux/reducer/profileReducer';
import {connect} from 'react-redux';
import Preloader from '../../ui/Preloader';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {compose} from 'redux';
import {withRedirect} from '../../hoc';
import {ProfileCard} from "../../components/ProfileCard";
import {Image} from "../../ui/Image";
import {ProfileWall} from "../../components/ProfileWall";
import s from './profile.module.scss';
import {ANON_USER_COVER} from "../../constants";
import {getUserData} from "../../services/redux/reducer/authReducer";

const mapStateToProps = (state) => ({
  isFetching: getProfileIsFetching(state),
  visitedProfile: getVisitedProfile(state),
  authedUser: getUserData(state),
  posts: getPosts(state),
});

const ProfileRouter = ({
                         changeProfileFetchingStatus,
                         changeVisitedProfile,
                         authedUser,
                         visitedProfile,
                         changeProfileAvatar,
                         changeProfileInfo,
                         posts,
                         isFetching,
                         addPost,
                         deletePost,
                       }) => {
  const {id = authedUser?.id} = useParams();

  useEffect(() => {
    changeProfileFetchingStatus(true);
    changeVisitedProfile(id);
  }, [id, changeVisitedProfile, changeProfileFetchingStatus])

  if (isFetching) {
    return <Preloader/>
  }

  const {fullName, photos: {small: photo}} = visitedProfile;

  return (
    <section className={s.profile}>
      <div className={s.profile__cover}>
        <Image src={ANON_USER_COVER} alt='обложка пользователя'/>
      </div>
      <ProfileCard visitedProfile={visitedProfile} changeProfileAvatar={changeProfileAvatar}
                   changeProfileInfo={changeProfileInfo} isOwner={id === authedUser.id} />
      <ProfileWall name={fullName} photo={photo} posts={posts} addPost={addPost} deletePost={deletePost} />
    </section>
  )
}

export const Profile = compose(connect(mapStateToProps, {
  changeProfileFetchingStatus, changeVisitedProfile, addPost, deletePost, changeProfileAvatar, changeProfileInfo,
}), withRedirect('/login'))(ProfileRouter);
