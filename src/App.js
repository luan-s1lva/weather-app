import CardComponent from "./components/CardComponent";
import SearchBar from "./components/SearchBar";
import TemperatureStatus from "./components/TemperatureStatus";

function App() {
  return (
    <>
      <h1>Olá Mundo!</h1>
      <CardComponent>
        {<SearchBar />}
        {<TemperatureStatus />}
      </CardComponent>
    </>
  );
}

export default App;
