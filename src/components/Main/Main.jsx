import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Profile from "./Profile/Profile";

class Main extends React.Component {
    render() {
        return (
            <main className="main">
                <div className="main__container _container">
                    <Sidebar />
                    <section className="main__content">
                        <Profile />
                    </section>
                </div>
            </main>
        );
    }
}

export default Main;