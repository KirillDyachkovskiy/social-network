import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Messenger } from "./pages/Messenger";
import { Notfound } from "./pages/Notfound";
import { Profile } from "./pages/Profile";

const App = (props) => {
  const { state } = props;
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Profile state={state.profile} />} />
        <Route path="messenger" element={<Messenger state={state.messenger} />} />
        <Route path="messenger/*" element={<Messenger state={state.messenger} />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export { App };