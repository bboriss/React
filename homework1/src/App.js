import "./App.css";
import Header from "./Layout/Header/Header";
import PlanetPage from "./Pages/PlanetPage/PlanetPage";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header title="STAR WARS Planets" />
      <main>
        <PlanetPage />
      </main>
      <Footer>
        <p>This page was built with React 17.0.2</p>
      </Footer>
    </div>
  );
}

export default App;
