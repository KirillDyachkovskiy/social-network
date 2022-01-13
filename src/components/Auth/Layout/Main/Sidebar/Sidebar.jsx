import { connect } from 'react-redux';
import { compose } from 'redux';
import { SidebarStateless } from './SidebarStateless';

const mapStateToProps = (state) => ({ sidebar: state.sidebar, });

export const Sidebar = compose(
    connect(mapStateToProps)
)(SidebarStateless);
