import { NavLink } from 'react-router-dom'

import c from './Dialog.module.scss'

const Dialog = (props) => {
    const setActive = ({ isActive }) => (isActive) ? c.active : "";
    const { name, id } = props;
    return (
        <NavLink className={setActive} to={id}>{name}</NavLink>
    )
}

export { Dialog }