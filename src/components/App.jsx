import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";

import { Messenger } from "./pages/Messenger";
import { Notfound } from "./pages/Notfound";
import { Profile } from "./pages/Profile";

const App = ({ store }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout store={store} />} >
        <Route index element={<Profile store={store} />} />
        <Route path="messenger/*" element={<Messenger store={store} />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export { App };