import React from "react";

function TextUpperCase(props) {
  return (
    <h2 style={{ color: "red" }} align="center">
      {props.text.toUpperCase()}
    </h2>
  );
}

function Button(props) {
  return (
    <button
      onClick={(event) => alert("A label desse botão é baixar CV", event)}
    >
      {props.label}
    </button>
  );
}

function App() {
  return (
    <div>
      <TextUpperCase text="texto desafio 1 - base react" /> <hr />
      <Button label="Baixar CV"/>
    </div>
  );
}

export default App;
