import { connect } from 'react-redux';
import { UsersStateless } from "./UsersStateless";

const mapStateToProps = (state) => ({ users: state.users, });

export const Users = connect(mapStateToProps)(UsersStateless);
