import { connect } from 'react-redux';
import { SamplePage } from '../SamplePage';
import { Content } from './Content';

const mapStateToProps = (state) => ({
    menu: state.messenger.menu,
    content: <Content />,
})

export const Messenger = connect(mapStateToProps)(SamplePage);
