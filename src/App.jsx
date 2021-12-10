import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { Messenger } from "./pages/Messenger";
import { Notfound } from "./pages/Notfound";
import { Profile } from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Profile />} />
        {/* <Route path="messenger" element={<Messenger />} /> */}
        <Route path="messenger/*" element={<Messenger />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;