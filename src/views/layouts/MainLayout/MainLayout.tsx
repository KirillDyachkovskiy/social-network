import { Outlet } from 'react-router-dom';
import { FC } from 'react';
import { Logo, Sidebar } from '../../ui';
import LoginCard from '../../components/LoginCard';
import { SIDEBAR } from '../../../data/constants';
import s from './mainLayout.module.scss';

interface IMainLayout {
  name: string | null;
  logout: () => void;
}

const MainLayout: FC<IMainLayout> = ({ name, logout }) => (
  <section className={s.layout}>
    <header className={s.layout__header}>
      <div className={s.layout__container}>
        <Logo />
        <LoginCard name={name} logout={logout} />
      </div>
    </header>
    <main className={`${s.layout__main} ${s.layout__container}`}>
      <div className={s.layout__sidebar}>
        <Sidebar items={SIDEBAR} />
      </div>
      <div className={s.layout__content}>
        <Outlet />
      </div>
    </main>
  </section>
);

export default MainLayout;
