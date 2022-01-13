import { setVisitedUserProfile, getVisitedUserProfile } from '../../../redux/reducer/profileReducer';
import { connect } from 'react-redux';
import { ProfileStateless } from './ProfileStateless';
import { Preloader } from '../../ui/Preloader';
import { useParams } from 'react-router-dom';
import { Component } from 'react';

const mapStateToProps = (state) => ({
    visitedProfile: state.profile.visitedProfile,
    authedUser: state.auth.data,
});

class ProfileCombine extends Component {
    componentDidMount() {
        this.props.getVisitedUserProfile(this.props.id)
    }
    componentWillUnmount() {
        this.props.setVisitedUserProfile()
    }
    render() {
        return (
            <>
                {(this.props.visitedProfile) ? <ProfileStateless {...this.props.visitedProfile} /> : <Preloader color='blue' />}
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

export const Profile = connect(
    mapStateToProps,
    {
        setVisitedUserProfile,
        getVisitedUserProfile,
    }
)(ProfileRouter);
