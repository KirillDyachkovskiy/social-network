import { Header } from './Header'
import { Main } from './Main'

import s from './Layout.module.scss'

export const Layout = () => {
    return (
        <div className={s.wrapper}>
            <Header />
            <Main />
        </div>
    )
}
