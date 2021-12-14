import { Header } from './Header'
import { Main } from './Main'

const Layout = ({ store }) => {
    return (
        <div className="wrapper">
            <Header />
            <Main store={store} />
        </div>
    )
}

export { Layout }
