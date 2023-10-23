import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Presentation from "./Components/Presentation/Presentation";

function App() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
