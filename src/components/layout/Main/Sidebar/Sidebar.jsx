import { connect } from 'react-redux';
import { SidebarStateless } from './SidebarStateless';

const mapStateToProps = (state) => ({ sidebar: state.sidebar, });

export const Sidebar = connect(mapStateToProps)(SidebarStateless);
