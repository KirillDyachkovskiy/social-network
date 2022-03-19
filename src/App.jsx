import React, {Suspense} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {Auth} from './Auth';
// import Messenger from './components/Messenger';
// import Friends from './components/Friends';
// import Profile from './components/Profile';
// import Login from './components/Login';
import Preloader from "./ui/Preloader";
import Notfound from "./pages/Notfound";
const Messenger = React.lazy(() => import('./pages/Messenger'));
const Friends = React.lazy(() => import('./pages/Friends'));
const Profile = React.lazy(() => import('./components/pages/Profile'));
const Login = React.lazy(() => import('./pages/Login'));

export const App = () => {
  return (
    <Suspense fallback={<Preloader/>}>
      <Routes>
        <Route path='/' element={<Auth/>}>
          <Route index element={<Profile/>}/>
          <Route path='/:id' element={<Profile/>}/>
          <Route path='messenger/*' element={<Messenger/>}/>
          <Route path='friends/*' element={<Friends/>}/>
          <Route path='news/*' element={<Navigate to="/not-found"/>}/>
          <Route path='music/*' element={<Navigate to="/not-found"/>}/>
          <Route path='settings/*' element={<Navigate to="/not-found"/>}/>
          <Route path='login/*' element={<Login/>}/>
          <Route path='not-found' element={<Notfound/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
};
