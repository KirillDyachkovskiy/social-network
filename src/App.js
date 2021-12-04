import React from "react";
import "./css/style.css";

import Header from "./jsx/Header";
import Main from "./jsx/Main/Main";
import Footer from "./jsx/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;