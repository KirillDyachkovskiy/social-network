import c from "./Menu.module.scss";

import { Item } from './Item';

export const Menu = ({ items }) => {
    return (
        <aside>
            <div className={c.menu}>
                {items.map(d => <Item key={d.id} id={d.id} text={d.text} />)}
            </div>
        </aside>
    )
}
