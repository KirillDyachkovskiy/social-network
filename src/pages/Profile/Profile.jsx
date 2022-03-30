import {
  addPost, changeUserAvatar, changeUserInfo,
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
import {HOC} from '../../hoc';
import {ProfileCard} from "../../components/ProfileCard";
import {Image} from "../../ui/Image";
import {ProfileWall} from "../../components/ProfileWall";
import s from './profile.module.scss';
import {ANON_USER_COVER} from "../../constants";

const mapStateToProps = (state) => ({
  isFetching: getProfileIsFetching(state),
  visitedProfile: getVisitedProfile(state),
  posts: getPosts(state),
});

const ProfileCombine = ({isFetching, visitedProfile, posts, authedUserId, changeUserAvatar, changeUserInfo}) => {
  if (isFetching) {
    return <Preloader/>
  }

  return (
    <section className={s.profile}>
      <div className={s.profile__cover}>
        <Image src={ANON_USER_COVER} alt='обложка пользователя' />
      </div>
      <ProfileCard visitedProfile={visitedProfile} authedUserId={authedUserId} changeUserAvatar={changeUserAvatar} changeUserInfo={changeUserInfo} />
      <ProfileWall visitedProfile={visitedProfile} posts={posts} />
    </section>
  )
}

const ProfileRouter = (props) => {
  const {changeProfileFetchingStatus, changeVisitedProfile, authedUser, ...childProps} = props;

  const {id = authedUser.id} = useParams();

  useEffect(() => {
    changeProfileFetchingStatus(true);
    changeVisitedProfile(id);
  }, [id])

  return <ProfileCombine {...childProps} authedUserId={authedUser.id} />
}

export const Profile = compose(connect(mapStateToProps, {
  changeProfileFetchingStatus, changeVisitedProfile, addPost, deletePost, changeUserAvatar, changeUserInfo,
}), HOC.withRedirect('/login'))(ProfileRouter);
