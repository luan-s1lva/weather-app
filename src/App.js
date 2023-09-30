import CardComponent from "./components/CardComponent";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <CardComponent>{<SearchBar />}</CardComponent>
      <Footer />
    </>
  );
}

export default App;
