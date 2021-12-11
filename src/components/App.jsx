import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Messenger } from "./pages/Messenger";
import { Notfound } from "./pages/Notfound";
import { Profile } from "./pages/Profile";

const App = (props) => {
  const { posts, dialogs, messages } = props;
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Profile posts={posts} />} />
        <Route path="messenger" element={<Messenger dialogs={dialogs} messages={messages} />} />
        <Route path="messenger/*" element={<Messenger dialogs={dialogs} messages={messages} />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;