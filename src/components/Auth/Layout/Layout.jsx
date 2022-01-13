import { Header } from './Header'
import { Main } from './Main'

import s from './Layout.module.scss'

export const Layout = ({ login }) => {
    return (
        <div className={s.wrapper}>
            <Header login={login} />
            <Main login={login} />
        </div>
    )
}
