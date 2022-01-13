import { setVisitedUserProfile, getVisitedUserProfile } from '../../../redux/reducer/profileReducer';
import { connect } from 'react-redux';
import { ProfileStateless } from './ProfileStateless';
import { Preloader } from '../../ui/Preloader';
import { useParams } from 'react-router-dom';
import { Component } from 'react';
import { compose } from 'redux';
import { HOC } from '../../hoc/hocs';

const mapStateToProps = (state) => ({
    visitedProfile: state.profile.visitedProfile,
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

export const Profile = compose(
    connect(mapStateToProps, { setVisitedUserProfile, getVisitedUserProfile, }),
    HOC.withRedirect
)(ProfileRouter);
