import React from "react";
import PlanetListItem from "../PlanetListItem/PlanetListItem";
import "./PlanetList.css";
import Loader from "react-spinners/ClipLoader";

class PlanetList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("Planet List Updated");
  }

  render() {
    return (
      <>
        {!this.props.planetData && (
          <div className="Loader">
            <Loader />
          </div>
        )}
        {this.props.planetData && (
          <>
            <ol className="PlanetList">
              {this.props.planetData.map((planet, index) => (
                <PlanetListItem
                  isSelected={this.props.selectedPlanetName === planet.name}
                  key={planet.name + Math.random()}
                  name={planet.name}
                  planetIndex={index}
                  onListItemClick={this.props.onListItemClick}
                />
              ))}
            </ol>
          </>
        )}
      </>
    );
  }
}

export default PlanetList;
