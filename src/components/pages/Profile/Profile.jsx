import { setVisitedUserProfile, getVisitedUserProfile, setUserStatus, getUserStatus, } from '../../../redux/reducer/profileReducer';
import { connect } from 'react-redux';
import { ProfileStateless } from './ProfileStateless';
import { Preloader } from '../../ui/Preloader';
import { useParams } from 'react-router-dom';
import { Component } from 'react';
import { compose } from 'redux';
import { HOC } from '../../hoc/hocs';

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
                    : <ProfileStateless {...this.props.visitedProfile} />}
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
    connect(mapStateToProps, { setVisitedUserProfile, getVisitedUserProfile, setUserStatus, getUserStatus, }),
    HOC.withRedirect
)(ProfileRouter);
