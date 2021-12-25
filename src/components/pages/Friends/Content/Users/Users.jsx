import { connect } from 'react-redux';
import { setCurrentPage_AC, setUsersList_AC, toggleFriend_AC } from '../../../../../redux/reducer/usersReducer';
import { UsersStateless } from "./UsersStateless";

const mapStateToProps = (state) => ({
    users: state.users.list,
    pageSize: state.users.pageSize,
    totalCount: state.users.totalCount,
    currentPage: state.users.currentPage,
});
const mapDispatchToProps = (dispatch) => ({
    onButtonClick: (id) => dispatch(toggleFriend_AC(id)),
    setUsersList: (users, totalCount) => dispatch(setUsersList_AC(users, totalCount)),
    setCurrentPage: (number) => dispatch(setCurrentPage_AC(number)),
});

export const Users = connect(mapStateToProps, mapDispatchToProps)(UsersStateless);
