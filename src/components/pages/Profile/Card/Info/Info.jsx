import { connect } from "react-redux";
import { changeStatus_AC } from "../../../../../redux/reducer/usersReducer";
import c from "./Info.module.scss";
import { Status } from "./Status/Status";

const mapStateToProps = (state) => ({
    user: state.users.list[state.users.currentUser.id],
});
const mapDispatchToProps = (dispatch) => ({
    onInputChange: (event) => dispatch(changeStatus_AC(event.target.value)),
});

const InfoStateLess = ({ user, onInputChange }) => {
    return (
        <section className={c.info}>
            <Status text={user.status} onInputChange={onInputChange} />
            <div className={c.row}>
                <span>Birthday:</span>
                <span>{user.birthday.toLocaleDateString()}</span>
            </div>
            <div className={c.row}>
                <span>Current city:</span>
                <span>{`${user.location.city} / ${user.location.country}`}</span>
            </div>
            <div className={c.row}>
                <span>Education:</span>
                <span>{user.education}</span>
            </div>
            <div className={c.row}>
                <span>Wed-site:</span>
                <a href={user.web_site} target="_blank" rel="noreferrer">{user.web_site}</a>
            </div>
        </section>
    )
};

export const Info = connect(mapStateToProps, mapDispatchToProps)(InfoStateLess);