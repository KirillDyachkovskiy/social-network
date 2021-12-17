import c from "./SamplePage.module.scss"

import { Content } from "./Content"
import { Menu } from './Menu'

export const SamplePage = ({ content, menu }) => {
    return (
        <section className={c.section}>
            <Content>
                {content}
            </Content>
            <Menu items={menu} />
        </section>
    )
};
