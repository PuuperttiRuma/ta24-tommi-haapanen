import "./App.css";
import Greeting from "./components/Greeting";
import PlanetList from "./components/PlanetList";
import R2D2Greeting from "./components/R2D2Greeting";

interface IPlanet {
  name: string,
  climate: string
}

function App() {
  const fullName = "Tommi Haapanen";
  const age = 39;
  const planetList: IPlanet[] = [
    { name: "Hoth", climate: "Ice" },
    { name: "Tattooine", climate: "Desert" },
    { name: "Alderaan", climate: "Temperate" },
    { name: "Mustafar", climate: "Volcanic", }
  ];
  

  return (
    <>
      <h1>Assignment 1</h1>
      <Greeting fullName={fullName} age={age} />
      <h1>Assignment 2</h1>
      <R2D2Greeting />
      <PlanetList planetList={planetList} />
    </>
  );
}

export default App;
export type {IPlanet};