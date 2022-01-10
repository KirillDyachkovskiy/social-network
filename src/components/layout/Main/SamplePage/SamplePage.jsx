import c from "./SamplePage.module.scss"

import { Menu } from './Menu'

export const SamplePage = ({ children, menu }) => {
    return (
        <section className={c.sample}>
            <div className={c.content}>
                {children}
            </div>
            <Menu items={menu} />
        </section>
    )
};
