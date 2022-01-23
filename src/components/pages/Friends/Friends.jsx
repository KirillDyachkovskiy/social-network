import {connect} from 'react-redux';
import {compose} from 'redux';
import {HOC} from '../../hoc';
import {SamplePage} from "../../Auth/Layout/SamplePage";
import {Users} from "./Users";
import {Title} from "../../ui/Title";
import {changePage} from "../../../services/redux/reducer/friendsReducer";
import {getCurrentPage, getPageSize, getPagination} from "../../../services/selectors";

const mapStateToProps = (state) => ({
  pagination: getPagination(state),
  pageSize: getPageSize(state),
  currentPage: getCurrentPage(state),
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
