import { Header } from './Header'
import { Main } from './Main'

const Layout = (props) => {
    const { state } = props;
    return (
        <div className="wrapper">
            <Header />
            <Main state={state.sidebar} />
        </div>
    )
}

export { Layout }
