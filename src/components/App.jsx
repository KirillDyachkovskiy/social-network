import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import { Messenger } from "./pages/Messenger";
import { Notfound } from "./pages/Notfound";
import { Profile } from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Profile />} />
          <Route path="messenger/*" element={<Messenger />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export { App };