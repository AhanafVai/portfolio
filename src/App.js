import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Contacts from "./Components/Contacts/Contacts";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Blogs />
      <Contacts />
    </div>
  );
}

export default App;
