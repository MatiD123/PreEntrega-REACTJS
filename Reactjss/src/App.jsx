import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="main">
      <Navbar />
      <ItemListContainer greetings="Bienvenidos!" />
    </main>
  );
}

export default App;
