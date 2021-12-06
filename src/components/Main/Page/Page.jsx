import {
    BrowserRouter as Router,
    NavLink as Link,
    Routes,
    Route
} from "react-router-dom";

import { Profile } from "./Profile";
import { Messenger } from "./Messenger";

const Page = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Profile />} />
                <Route path="/messenger" element={<Messenger />} />
            </Routes>
        </Router>
    );
}

export { Page };