import { Routes, Route } from "react-router-dom";

import { Profile } from "./Profile";
import { Messenger } from "./Messenger";
import { Notfoundpage } from "./Notfoundpage";

const Page = () => {
    return (
        <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="*" element={<Notfoundpage />} />
        </Routes>
    );
}

export { Page };