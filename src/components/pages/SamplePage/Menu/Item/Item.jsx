import { NavLink } from 'react-router-dom'
import c from '../Menu.module.scss'

export const Item = ({ id, text }) => {
    const setActive = ({ isActive }) => (isActive) ? c.active : '';
    return (
        <NavLink className={setActive} to={id.toString()}>{text}</NavLink>
    )
}
