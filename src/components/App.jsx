import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import { Messenger } from "./pages/Messenger";
import { Friends } from "./pages/Friends";
import { Notfound } from "./pages/Notfound";
import { Profile } from "./pages/Profile";
import { SamplePage } from "./pages/SamplePage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Profile />} />
          <Route path="messenger/*" element={<Messenger />} />
          <Route path="friends/*" element={<Friends />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
