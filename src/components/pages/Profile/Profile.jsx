import {
  addPost, changeAuthedUserAvatar, changeAuthedUserInfo,
  changeProfileFetchingStatus,
  changeVisitedProfile,
  deletePost,
  getPosts,
  getProfileIsFetching,
  getVisitedProfile,
} from '../../../services/redux/reducer/profileReducer';
import {connect} from 'react-redux';
import Preloader from '../../../ui/Preloader';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {compose} from 'redux';
import {HOC} from '../../../hoc';
import {Submit} from '../../Submit';
import {Card} from "./Card";
import {Wall} from "./Wall";
import {Posts} from "./Wall/Posts";

const mapStateToProps = (state) => ({
  isFetching: getProfileIsFetching(state),
  visitedProfile: getVisitedProfile(state),
  posts: getPosts(state),
});

const ProfileCombine = ({isFetching, visitedProfile, posts, addPost, deletePost, authedUserId, changeAuthedUserAvatar, changeAuthedUserInfo}) => {
  if (isFetching) {
    return <Preloader/>
  }

  return (
    <>
      <Card visitedProfile={visitedProfile} authedUserId={authedUserId} changeAuthedUserAvatar={changeAuthedUserAvatar} changeAuthedUserInfo={changeAuthedUserInfo} />
      <Wall renderSubmit={() => <Submit onSubmit={addPost} placeholder="What's new?">Post</Submit>}
            renderPosts={() => <Posts posts={posts} photo={visitedProfile.photos?.small} name={visitedProfile.fullName}
                                      onClick={deletePost}/>}/>
    </>
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
  changeProfileFetchingStatus, changeVisitedProfile, addPost, deletePost, changeAuthedUserAvatar, changeAuthedUserInfo,
}), HOC.withRedirect('/login'))(ProfileRouter);
