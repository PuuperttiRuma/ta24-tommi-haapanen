import { IPlanet } from "../App";
import Table from "react-bootstrap/Table";

interface IPlanetListProps {
  planetList: IPlanet[];
}

const PlanetList = ({ planetList }: IPlanetListProps) => {
  return (
    <div>
      <h1>Assignment 3</h1>
      <h2>Planets</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>Planet</th>
            <th>Climate</th>
          </tr>
        </thead>
        <tbody>
          {planetList.map((planet) => (
            <tr key={planet.name}>
              <td>{planet.name}</td>
              <td>{planet.climate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PlanetList;
