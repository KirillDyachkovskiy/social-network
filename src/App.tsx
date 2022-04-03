import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

const Notfound = React.lazy(():any => import('./pages/Notfound'));
const Messenger = React.lazy(():any => import('./pages/Messenger'));
const Friends = React.lazy(():any => import('./pages/Friends'));
const Profile = React.lazy(():any => import('./pages/Profile'));
const Login = React.lazy(():any => import('./pages/Login'));

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Profile />} />
          <Route path=":id" element={<Profile />} />
          <Route path="messenger/*" element={<Messenger />} />
          <Route path="friends/*" element={<Friends />} />
          <Route path="news/*" element={<Navigate to="/not-found" />} />
          <Route path="music/*" element={<Navigate to="/not-found" />} />
          <Route path="settings/*" element={<Navigate to="/not-found" />} />
          <Route path="login/*" element={<Login />} />
          <Route path="not-found/*" element={<Notfound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
