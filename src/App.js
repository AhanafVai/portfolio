import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Contacts from "./Components/Contacts/Contacts";
import Home from "./Components/Home/Home";

import Projects2 from "./Components/Projects2/Projects2";

import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />

      <Projects2 />
      <Blogs />
      <Contacts />
    </div>
  );
}

export default App;
