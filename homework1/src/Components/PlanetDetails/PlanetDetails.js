import React from "react";
import "./PlanetDetails.css";
import { FaBackspace } from "react-icons/fa";
import CloseButton from "../Button/CloseButton/CloseButton";

class PlanetDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counterIsShown: true,
    };
  }

  handleClick = () => {
    this.props.hideCounter(false);
  };

  render() {
    return (
      <div className="PlanetDetails">
        {this.props.selectedPlanetData && (
          <CloseButton
            closeSymbol={FaBackspace}
            onButtonClick={this.handleClick}
          />
        )}
        <div className="details__container">
          {this.props.selectedPlanetData && (
            <>
              <div>
                <strong>Name: </strong>
                {this.props.selectedPlanetData.name}
              </div>
              <div>
                <strong>Rotation Period: </strong>
                {this.props.selectedPlanetData.rotation_period}
              </div>
              <div>
                <strong>Orbital Period: </strong>
                {this.props.selectedPlanetData.orbital_period}
              </div>
              <div>
                <strong>Diameter: </strong>
                {this.props.selectedPlanetData.diameter}
              </div>
              <div>
                <strong>Climate: </strong>
                {this.props.selectedPlanetData.climate}
              </div>
              <div>
                <strong>Gravity: </strong>
                {this.props.selectedPlanetData.gravity}
              </div>
              <div>
                <strong>Terrain: </strong>
                {this.props.selectedPlanetData.terrain}
              </div>
              <div>
                <strong>Surface Water: </strong>
                {this.props.selectedPlanetData.surface_water}
              </div>
              <div>
                <strong>Population: </strong>
                {this.props.selectedPlanetData.population}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default PlanetDetails;
