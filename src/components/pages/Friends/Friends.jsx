import { connect } from 'react-redux';
import { SamplePage } from '../SamplePage';
import { Content } from './Content';

const mapStateToProps = (state) => ({
    menu: state.users.menu,
    content: <Content />,
})

export const Friends = connect(mapStateToProps)(SamplePage);
