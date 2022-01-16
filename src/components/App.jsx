import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Messenger } from './pages/Messenger';
import { Friends } from './pages/Friends';
import { Notfound } from './pages/Notfound';
import { Profile } from './pages/Profile';
import { Auth } from './Auth';
import { Login } from './pages/Login';

// добавить обработку ошибок в промисы
// сделать аксиос как в методичке

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
