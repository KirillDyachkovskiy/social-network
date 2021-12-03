import './App.css';
import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-grid">
          <header className="main-grid__header header">
            <img src="./logo.png" alt="kirillDN" className="header__log" />
          </header>
          <nav className="main-grid__navbar navbar">
            <div className="navbar__profile">
              Profile
            </div>
            <div className="navbar__messages">
              Messages
            </div>
            <div className="navbar__news">
              News
            </div>
            <div className="navbar__music">
              Music
            </div>
            <div className="navbar__setting">
              Setting
            </div>
          </nav>
          <main className="main-grid__content content">
            <div className="content__main">
              Main block
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;