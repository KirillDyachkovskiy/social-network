import { connect } from 'react-redux';
import { setUsersList_AC, toggleFriend_AC } from '../../../../../redux/reducer/usersReducer';
import { UsersStateless } from "./UsersStateless";

const mapStateToProps = (state) => ({ users: state.users, });
const mapDispatchToProps = (dispatch) => ({
    onButtonClick: (id) => dispatch(toggleFriend_AC(id)),
    setUsersList: (users) => dispatch(setUsersList_AC(users))
});

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersStateless);
