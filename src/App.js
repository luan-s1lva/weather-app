import CardComponent from "./components/CardComponent";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <h1>Olá Mundo!</h1>
      <CardComponent>{<SearchBar />}</CardComponent>
    </>
  );
}

export default App;
