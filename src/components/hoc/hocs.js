import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const HOC = {
    withRedirect(Component) {
        const mapStateToProps = (state) => ({
            authedUser: state.auth.data,
        });
        const redirectedComponent = (props) => {
            return (
                <>
                    {(props.authedUser.id) ? <Component {...props} /> : <Navigate to='/login' />}
                </>
            )
        };
        return connect(mapStateToProps)(redirectedComponent)
    },
};
