import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {getData} from "../../services/selectors";

export const HOC = {
  withRedirect: (to) => (Component) => {
    const mapStateToProps = (state) => ({
      authedUser: getData(state),
    });

    const RedirectedComponent = (props) => {
      if (to === '/login') {
      return <>
          {(props.authedUser.id) ? <Component {...props} /> : <Navigate to={to}/>}
        </>
      } else if (to === '/') {
        return <>
          {(!props.authedUser.id) ? <Component {...props} /> : <Navigate to={-1}/>}
        </>
      }
    };

    return connect(mapStateToProps)(RedirectedComponent)
  },
};
