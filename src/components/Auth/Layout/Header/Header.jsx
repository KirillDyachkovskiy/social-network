import c from './Header.module.scss';
import { Logo } from '../../../ui/Logo';
import { LoginCard } from './LoginCard';

export const Header = () => {
  return (
    <header className={c.header}>
      <div className={c.container}>
        <Logo />
        <LoginCard />
      </div>
    </header>
  )
};
