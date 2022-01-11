import { setUserProfile } from '../../../redux/reducer/profileReducer';
import { Component } from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { ProfileStateless } from './ProfileStateless';
import { Preloader } from '../../ui/Preloader'

const mapStateToProps = (state) => ({
    userProfile: state.profile.userProfile,
});

class ProfileCombine extends Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/12`)
            .then(({ data }) => {
                this.props.setUserProfile(data);
            });
    }
    render() {
        return (
            <>
                {(this.props.userProfile) ? <ProfileStateless {...this.props} /> : <Preloader />}
            </>
        )
    }
}

export const Profile = connect(
    mapStateToProps,
    {
        setUserProfile,
    }
)(ProfileCombine);
