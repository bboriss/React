import React from "react";
import axios from "axios";
import PlanetList from "../../Components/PlanetList/PlanetList";
import PlanetDetails from "../../Components/PlanetDetails/PlanetDetails";
import PaginationArrow from "../../Components/Button/PaginationArrow/PaginationArrow";
import "./PlanetPage.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

class PlanetPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planetData: null,
      selectedPlanetData: null,
      isPlanetDetailsShown: false,
      url: "https://swapi.dev/api/planets",
      nextPage: null,
      previousPage: null,
      paginationArrow: true,
    };
  }

  componentDidMount() {
    axios.get(this.state.url).then((response) => {
      this.setState({
        planetData: response.data.results,
        nextPage: response.data.next,
        previousPage: response.data.previous,
      });
    });
  }

  onPlanetSelect(selectedIndex) {
    this.setState((prevState) => ({
      selectedPlanetData: prevState.planetData[selectedIndex],
      isPlanetDetailsShown: true,
    }));
  }

  onPlanetDetailsToggle() {
    this.setState((prevState) => {
      return {
        isPlanetDetailsShown: !prevState.isPlanetDetailsShown,
      };
    });
  }

  setPreviousPage() {
    console.log(this.state);
    console.log(this.state.url);

    this.setState(() => {
      return {
        planetData: null,
        paginationArrow: null,
        selectedPlanetData: null,
        isPlanetDetailsShown: false,
        isPlanetDetailsShown: false,
      };
    });

    axios.get(this.state.previousPage).then((response) => {
      this.setState(() => {
        return {
          planetData: response.data.results,
          nextPage: response.data.next,
          previousPage: response.data.previous,
          paginationArrow: true,
          isPlanetDetailsShown: true,
        };
      });
    });
  }

  setNextPage() {
    console.log(this.state);
    console.log(this.state.url);

    this.setState(() => {
      return {
        planetData: null,
        paginationArrow: null,
        selectedPlanetData: null,
        isPlanetDetailsShown: false,
      };
    });

    axios.get(this.state.nextPage).then((response) => {
      this.setState(() => {
        return {
          planetData: response.data.results,
          nextPage: response.data.next,
          previousPage: response.data.previous,
          paginationArrow: true,
          isPlanetDetailsShown: true,
        };
      });
    });
  }

  hideCounter = (newState) => {
    this.setState({ isPlanetDetailsShown: newState });
  };

  render() {
    console.log(this.state);

    return (
      <section className="page">
        <div className="page__heading">
          <h2>Discover your favourite planet!</h2>
          <p>Click on a planet name in the list below to see their details</p>
        </div>
        <div className="Planet__container">
          {this.state.previousPage && this.state.paginationArrow && (
            <PaginationArrow
              buttonArrowSide={FaArrowAltCircleLeft}
              onButtonClick={this.setPreviousPage.bind(this)}
            />
          )}
          <PlanetList
            planetData={this.state.planetData}
            onListItemClick={this.onPlanetSelect.bind(this)}
            selectedPlanetName={this.state.selectedPlanetData?.name}
          />
          {this.state.nextPage && this.state.paginationArrow && (
            <PaginationArrow
              buttonArrowSide={FaArrowAltCircleRight}
              onButtonClick={this.setNextPage.bind(this)}
            />
          )}
          {this.state.isPlanetDetailsShown && this.state.selectedPlanetData && (
            <PlanetDetails
              selectedPlanetData={this.state.selectedPlanetData}
              hideCounter={this.hideCounter}
            />
          )}
        </div>
      </section>
    );
  }
}

export default PlanetPage;
