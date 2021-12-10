import { NavLink } from 'react-router-dom'
import c from '../Messenger.module.scss'

const Dialog = (props) => {
    const setActive = ({ isActive }) => (isActive) ? c.active : '';

    const { id, name } = props;
    return (
        <NavLink className={setActive} to={id.toString()}>{name}</NavLink>
    )
}

export { Dialog }