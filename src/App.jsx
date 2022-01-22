import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Messenger } from './components/pages/Messenger';
import { Friends } from './components/pages/Friends';
import { Notfound } from './components/pages/Notfound';
import { Profile } from './components/pages/Profile';
import { Auth } from './components/Auth';
import { Login } from './components/pages/Login';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />} >
          <Route index element={<Profile />} />
          <Route path='/:id' element={<Profile />} />
          <Route path='messenger/*' element={<Messenger />} />
          <Route path='friends/*' element={<Friends />} />
          <Route path='news/*' element={<Notfound />} />
          <Route path='music/*' element={<Notfound />} />
          <Route path='settings/*' element={<Notfound />} />
          <Route path='login/*' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
