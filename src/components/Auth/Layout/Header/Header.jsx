import c from './Header.module.scss';
import { Logo } from '../../../ui/Logo';
import { Logout } from './Logout';

export const Header = () => {
  return (
    <header className={c.header}>
      <div className={c.container}>
        <Logo />
        <Logout />
      </div>
    </header>
  )
};
