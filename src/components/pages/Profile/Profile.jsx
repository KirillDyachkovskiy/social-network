import { setVisitedUserProfile, getVisitedUserProfile, setUserStatus, getUserStatus, addPost, } from '../../../redux/reducer/profileReducer';
import { connect } from 'react-redux';
import { ProfileStateless } from './ProfileStateless';
import { Preloader } from '../../ui/Preloader';
import { useParams } from 'react-router-dom';
import { Component } from 'react';
import { compose } from 'redux';
import { HOC } from '../../hoc/hocs';
import { Submit } from '../../ui/Submit';

const mapStateToProps = (state) => ({
  isFetching: state.profile.isFetching,
  visitedProfile: state.profile.visitedProfile,
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
    return (
      <>
        {(this.props.isFetching)
          ? <Preloader color='blue' />
          : <ProfileStateless
            visitedProfile={this.props.visitedProfile}
            renderSubmit={() => (
              <Submit onSubmit={this.props.addPost} placeholder="What's new?">
                Post
              </Submit>
            )} />}
      </>
    )
  }
}

const ProfileRouter = (props) => {
  const { id = props.authedUser.id } = useParams();

  return (
    <ProfileCombine {...props} id={id} />
  )
}

export const Profile = compose(
  connect(mapStateToProps, { setVisitedUserProfile, getVisitedUserProfile, setUserStatus, getUserStatus, addPost, }),
  HOC.withRedirectToLogin,
)(ProfileRouter);
