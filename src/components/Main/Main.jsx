import { Routes, Route } from "react-router-dom";

import { Layout } from './Layout';
import { Profile } from './pages/Profile';
import { Messenger } from './pages/Messenger';
import { Notfound } from './pages/Notfound';

const Main = () => (
    <main>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Profile />} />
                <Route path="messenger" element={<Messenger />} />
                {/* <Route path="news" element={<News />} />
                    <Route path="music" element={<Music />} />
                    <Route path="setting" element={<Setting />} /> */}
                <Route path="*" element={<Notfound />} />
            </Route>
        </Routes>
    </main>
);

export { Main };