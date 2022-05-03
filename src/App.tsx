import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Preloader from './views/ui/Preloader';

const MainLayout = lazy((): any => import('./views/layout/Layout'));
const Notfound = lazy((): any => import('./views/pages/Notfound'));
const Chat = lazy((): any => import('./views/pages/Chat'));
const Friends = lazy((): any => import('./views/pages/Friends'));
const Profile = lazy((): any => import('./views/pages/Profile'));
const Login = lazy((): any => import('./views/pages/Login'));

export default function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Profile />} />
          <Route path=':id' element={<Profile />} />
          <Route path='chat/*' element={<Chat />} />
          <Route path='friends/*' element={<Friends />} />
          <Route path='news/*' element={<Navigate to='/not-found' />} />
          <Route path='music/*' element={<Navigate to='/not-found' />} />
          <Route path='settings/*' element={<Navigate to='/not-found' />} />
          <Route path='login/*' element={<Login />} />
          <Route path='not-found/*' element={<Notfound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
