import {connect} from 'react-redux';
import {compose} from 'redux';
import {HOC} from '../../hoc';
import {SamplePage} from "../../Auth/Layout/SamplePage";
import {Users} from "./Users";
import {Title} from "../../ui/Title";
import {changePage} from "../../../services/redux/reducer/friendsReducer";

const mapStateToProps = (state) => ({
  pagination: state.friends.pagination,
  pageSize: state.friends.pageSize,
  currentPage: state.friends.currentPage,
});

const FriendsStateless = ({pagination, changePage, pageSize, currentPage}) => {
  return (
    <SamplePage menu={pagination} onClick={(page) => changePage(page, pageSize)} currentPage={currentPage}>
      <div>
        <Title>Users</Title>
        <Users/>
      </div>
    </SamplePage>
  )
};

export const Friends = compose(
  connect(mapStateToProps, {changePage}),
  HOC.withRedirectToLogin,
)(FriendsStateless);
