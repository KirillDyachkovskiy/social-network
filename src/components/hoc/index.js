import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {getData} from "../../services/selectors";

export const HOC = {
  withRedirectToLogin(Component) {
    const mapStateToProps = (state) => ({
      authedUser: getData(state),
    });
    const redirectedComponent = (props) => {
      return (
        <>
          {(props.authedUser.id) ? <Component {...props} /> : <Navigate to='/login'/>}
        </>
      )
    };
    return connect(mapStateToProps)(redirectedComponent)
  },
};
