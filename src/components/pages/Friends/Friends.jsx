import c from "./Friends.module.scss"

import { Content } from "./Content"
import { Menu } from './Menu'

export const Friends = () => {
    return (
        <section className={c.section}>
            <Content />
            <Menu />
        </section>
    )
};
