import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import characters, { Rick } from "./data.js";

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <>
        <Nav />
      </>
      {/* <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      </div> */}
      <>
        <Cards characters={characters} />
      </>
    </div>
  );
}

export default App;
