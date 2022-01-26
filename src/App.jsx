import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Messenger} from './components/Layout/Messenger';
import {Friends} from './components/Layout/Friends';
import {Notfound} from './components/Layout/Notfound';
import {Profile} from './components/Layout/Profile';
import {Auth} from './components/Auth';
import {Login} from './components/Layout/Login';

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Auth/>}>
          <Route index element={<Profile/>}/>
          <Route path='/:id' element={<Profile/>}/>
          <Route path='messenger/*' element={<Messenger/>}/>
          <Route path='friends/*' element={<Friends/>}/>
          <Route path='news/*' element={<Notfound/>}/>
          <Route path='music/*' element={<Notfound/>}/>
          <Route path='settings/*' element={<Notfound/>}/>
          <Route path='login/*' element={<Login/>}/>
        </Route>
      </Routes>
  )
};
