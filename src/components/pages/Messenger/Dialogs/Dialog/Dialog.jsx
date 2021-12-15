import { NavLink } from 'react-router-dom'
import c from '../Dialogs.module.scss'

export const Dialog = ({ id, name }) => {
    const setActive = ({ isActive }) => (isActive) ? c.active : '';
    return (
        <NavLink className={setActive} to={id.toString()}>{name}</NavLink>
    )
}
