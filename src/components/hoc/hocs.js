import { connect } from "react-redux";
import { Login } from "../pages/Login"

export const HOC = {
    withRedirect(Component) {
        const mapStateToProps = (state) => ({
            authedUser: state.auth.data,
        });
        const redirectedComponent = (props) => {
            return (
                <>
                    {(props.authedUser.id) ? <Component {...props} /> : <Login />}
                </>
            )
        };
        return connect(mapStateToProps)(redirectedComponent)
    },
};
