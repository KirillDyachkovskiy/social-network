import "./App.scss"

import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;