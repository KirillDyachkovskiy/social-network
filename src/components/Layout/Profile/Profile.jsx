import {
  addPost,
  changeProfileFetchingStatus,
  changeVisitedProfile,
  deletePost,
  getPosts,
  getProfileIsFetching,
  getVisitedProfile,
} from '../../../services/redux/reducer/profileReducer';
import {connect} from 'react-redux';
import Preloader from '../../ui/Preloader';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {compose} from 'redux';
import {HOC} from '../../hoc';
import {Submit} from '../../ui/Submit';
import c from "./Profile.module.scss";
import {Card} from "./Card";
import {Wall} from "./Wall";
import {Posts} from "./Wall/Posts";

const mapStateToProps = (state) => ({
  isFetching: getProfileIsFetching(state),
  visitedProfile: getVisitedProfile(state),
  posts: getPosts(state),
});

const ProfileCombine = ({isFetching, visitedProfile, posts, addPost, deletePost}) => {
  if (isFetching) {
    return <Preloader/>
  }

  return <section className={c.profile}>
    <Card {...visitedProfile} />
    <Wall renderSubmit={() => <Submit onSubmit={addPost} placeholder="What's new?">Post</Submit>}
          renderPosts={() => <Posts posts={posts} photo={visitedProfile.photos?.small} name={visitedProfile.fullName}
                                    onClick={deletePost}/>}/>
  </section>
}

const ProfileRouter = (props) => {
  const {changeProfileFetchingStatus, changeVisitedProfile, authedUser, ...childProps} = props;

  const {id = authedUser.id} = useParams();

  useEffect(() => {
    changeProfileFetchingStatus(true);
    changeVisitedProfile(id);
  }, [id])

  return <ProfileCombine {...childProps}/>
}

export const Profile = compose(connect(mapStateToProps, {
  changeProfileFetchingStatus, changeVisitedProfile, addPost, deletePost,
}), HOC.withRedirect('/login'))(ProfileRouter);
