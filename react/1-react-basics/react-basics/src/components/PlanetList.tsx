import { IPlanet } from "../App";

interface IPlanetListProps {
  planetList: IPlanet[];
}

const PlanetList = ({ planetList }: IPlanetListProps) => {
  return (
    <div>
      <h1>Assignment 3</h1>
      <h2>Planets</h2>
      <table>
        <tbody>
          {planetList.map((planet) => (
            <tr key={planet.name}>
              <td>{planet.name}</td>
              <td>{planet.climate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanetList;
