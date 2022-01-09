import c from "./SamplePage.module.scss"

import { Menu } from './Menu'

export const SamplePage = ({ content, menu }) => {
    return (
        <section className={c.section}>
            <div className={c.content}>
                {content()}
            </div>
            <Menu items={menu} />
        </section>
    )
};
