import { SidebarStateless } from "./SidebarStateless";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ sidebar: state.sidebar, });

export const Sidebar = connect(mapStateToProps)(SidebarStateless);
