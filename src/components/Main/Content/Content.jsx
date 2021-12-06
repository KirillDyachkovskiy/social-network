import classNames from "./Content.module.scss";

import { Profile } from "./Profile";
import { Messenger } from "./Messenger";
// import { News } from "./News";
// import { Music } from "./Music";
// import { Settings } from "./Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Content = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/im" element={<Messenger />} />
                {/* <Route path="/feed" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export { Content };