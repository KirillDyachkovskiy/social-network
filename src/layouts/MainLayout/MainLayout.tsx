import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Logo from '../../ui/Logo';
import LoginCard from '../../components/LoginCard';
import { Sidebar } from '../../ui/Sidebar';
import s from './mainLayout.module.scss';
import { authLogOut, authMe, getSidebar, getUserData } from '../../services/redux/reducer/authReducer';
import Preloader from '../../ui/Preloader';

export default function MainLayout() {
  const authedUserData = useSelector(getUserData);
  const sidebar = useSelector(getSidebar);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authMe());
  }, [dispatch, authMe]);

  if (!authedUserData) {
    return <Preloader />;
  }

  return (
    <section className={s.layout}>
      <header className={s.layout__header}>
        <div className={s.layout__container}>
          <Logo />
          <LoginCard login={authedUserData.login} authLogOut={() => dispatch(authLogOut)} />
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

