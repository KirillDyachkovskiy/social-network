import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Logo from '../ui/Logo';
import LoginCard from '../components/LoginCard';
import { Sidebar } from '../ui/Sidebar';
import {
  authLogOut,
  authMe,
  getSidebar,
  getUserData,
} from '../services/redux/reducers/authReducer';
import s from './layout.module.scss';

export default function Layout() {
  const { login } = useSelector(getUserData);
  const sidebar = useSelector(getSidebar);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authMe());
  }, [dispatch]);

  return (
    <section className={s.layout}>
      <header className={s.layout__header}>
        <div className={s.layout__container}>
          <Logo />
          <LoginCard login={login} authLogOut={() => dispatch(authLogOut())} />
        </div>
      </header>
      <main className={`${s.layout__main} ${s.layout__container}`}>
        <div className={s.layout__sidebar}>
          <Sidebar items={sidebar} />
        </div>
        <div className={s.layout__content}>
          <Outlet />
        </div>
      </main>
    </section>
  );
}
