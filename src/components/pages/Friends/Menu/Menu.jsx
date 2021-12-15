import c from "./Menu.module.scss";

import { Item } from './Item';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ items: state.messenger.dialogs, })

const MenuStateless = ({ items }) => {
    return (
        <aside>
            <div className={c.menu}>
                {items.map(d => <Item key={d.id} id={d.id} name={d.name} />)}
            </div>
        </aside>
    )
}

export const Menu = connect(mapStateToProps)(MenuStateless);
