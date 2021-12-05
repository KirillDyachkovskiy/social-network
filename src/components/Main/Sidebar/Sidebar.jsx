import React from "react";

class Sidebar extends React.Component {
    render() {
        return (
            <aside className="main__sidebar sidebar">
                <nav className="sidebar__menu">
                    <ul className="sidebar__list">
                        <li className="sidebar__item">
                            <a href="" className="sidebar__link">Profile</a>
                        </li>
                        <li className="sidebar__item">
                            <a href="" className="sidebar__link">Message</a>
                        </li>
                        <li className="sidebar__item">
                            <a href="" className="sidebar__link">News</a>
                        </li>
                        <li className="sidebar__item">
                            <a href="" className="sidebar__link">Music</a>
                        </li>
                        <li className="sidebar__item">
                            <a href="" className="sidebar__link">Settings</a>
                        </li>
                    </ul>
                </nav>
            </aside>
        );
    }
}

export default Sidebar;