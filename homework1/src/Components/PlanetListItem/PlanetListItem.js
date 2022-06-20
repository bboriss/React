import "./PlanetListItem.css";
import { FaSkull } from "react-icons/fa";

const PlanetListItem = (props) => {
  return (
    <li
      className={`PlanetListItem ${props.isSelected && "selected"}`}
      onClick={() => props.onListItemClick(props.planetIndex)}
    >
      <FaSkull /> {props.name} <FaSkull />
    </li>
  );
};

export default PlanetListItem;
