import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Presentation from "./Components/Presentation/Presentation";
import Stack from "./Components/Stack/Stack";

function App() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <Stack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
