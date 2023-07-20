import { useState } from "react";
import "./styles.css";

function ItemListContainer({ greetings }) {
  const [saludo, setSaludo] = useState(greetings);

  function changeGreeting() {
    setSaludo("Se ha registrado con exito!");
  }

  return (
    <div className="item-list-container">
      <Content saludo={saludo} changeGreeting={changeGreeting} />
    </div>
  );
}

function Content({ saludo, changeGreeting }) {
  return (
    <>
      <p>{saludo}</p>
      <button onClick={changeGreeting}>Registrarse! </button>
    </>
  );
}

export default ItemListContainer;
