import c from './Header.module.scss';
import { Logo } from '../../../ui/Logo';
import { Login } from './Login';

export const Header = ({ login }) => {
    return (
        <header className={c.header}>
            <div className={c.container}>
                <Logo />
                <Login login={login} />
            </div>
        </header>
    )
};
