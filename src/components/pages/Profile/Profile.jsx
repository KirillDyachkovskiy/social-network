import {
  getVisitedUserProfile,
  getUserStatus,
  addPost,
  changeProfileFetchingStatus
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
import {getProfileIsFetching, getVisitedProfile} from "../../../services/selectors";

const mapStateToProps = (state) => ({
  isFetching: getProfileIsFetching(state),
  visitedProfile: getVisitedProfile(state),
});

const ProfileCombine = ({
                          id,
                          isFetching,
                          visitedProfile,
                          getVisitedUserProfile,
                          getUserStatus,
                          addPost,
                          changeProfileFetchingStatus
                        }) => {

  useEffect(() => {
    changeProfileFetchingStatus(true)
    getVisitedUserProfile(id)
    getUserStatus(id)
  }, [id])

  useEffect(()=> ()=> {
    changeProfileFetchingStatus(true)
  }, [])

  return <>
    {(isFetching) ? <Preloader color='blue'/> : <section className={c.profile}>
      <Card {...visitedProfile} />
      <Wall renderSubmit={() => (<Submit onSubmit={addPost} placeholder="What's new?">
        Post
      </Submit>)}/>
    </section>}
  </>
}

const ProfileRouter = (props) => {
  const {id = props.authedUser.id} = useParams();

  return (<ProfileCombine {...props} id={id}/>)
}

export const Profile = compose(
  connect(mapStateToProps, {
    changeProfileFetchingStatus,
    getVisitedUserProfile,
    getUserStatus,
    addPost,
  }),
  HOC.withRedirectToLogin,
)(ProfileRouter);
