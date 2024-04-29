import "./App.css";
import Greeting from "./components/Greeting";

function App() {
  const fullName = "Tommi Haapanen";
  const age = 39;

  return (
    <>
      <Greeting fullName={fullName} age={age} />
    </>
  );
}

export default App;
