import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {getData} from "../../services/redux/reducer/authReducer";

export const HOC = {
  withRedirect: (to) => (WrappedComponent) => {
    const mapStateToProps = (state) => ({
      authedUser: getData(state),
    });

    const RedirectedComponent = (props) => {
      if (to === '/login') {
        return <>
          {(props.authedUser.id) ? <WrappedComponent {...props} /> : <Navigate to={to}/>}
        </>
      } else if (to === -1) {
        return <>
          {(!props.authedUser.id) ? <WrappedComponent {...props} /> : <Navigate to={to}/>}
        </>
      }
    };

    return connect(mapStateToProps)(RedirectedComponent)
  },
};
