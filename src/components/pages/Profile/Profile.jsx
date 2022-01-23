import {
  setVisitedUserProfile, getVisitedUserProfile, setUserStatus, getUserStatus, addPost,
} from '../../../services/redux/reducer/profileReducer';
import {connect} from 'react-redux';
import Preloader from '../../ui/Preloader';
import {useParams} from 'react-router-dom';
import {Component} from 'react';
import {compose} from 'redux';
import {HOC} from '../../hoc';
import {Submit} from '../../ui/Submit';
import c from "./Profile.module.scss";
import {Card} from "./Card";
import {Wall} from "./Wall";

const mapStateToProps = (state) => ({
  isFetching: state.profile.isFetching, visitedProfile: state.profile.visitedProfile,
});

class ProfileCombine extends Component {
  componentDidMount() {
    this.props.getVisitedUserProfile(this.props.id);
    this.props.getUserStatus(this.props.id);
  }

  componentWillUnmount() {
    this.props.setVisitedUserProfile();
    this.props.setUserStatus();
  }

  render() {
    return <>
      {(this.props.isFetching) ? <Preloader color='blue'/> : <section className={c.profile}>
        <Card {...this.props.visitedProfile} />
        <Wall renderSubmit={() => (<Submit onSubmit={this.props.addPost} placeholder="What's new?">
          Post
        </Submit>)}/>
      </section>}
    </>
  }
}

const ProfileRouter = (props) => {
  const {id = props.authedUser.id} = useParams();

  return (<ProfileCombine {...props} id={id}/>)
}

export const Profile = compose(
  connect(mapStateToProps, {
    setVisitedUserProfile,
    getVisitedUserProfile,
    setUserStatus,
    getUserStatus,
    addPost,
  }),
  HOC.withRedirectToLogin,
)(ProfileRouter);
