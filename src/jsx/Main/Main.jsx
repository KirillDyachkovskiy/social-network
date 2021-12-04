import React from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/profile/Profile";

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