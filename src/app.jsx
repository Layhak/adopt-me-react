import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt me"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     bread: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Yaya",
  //     animal: "Bird",
  //     bread: "Cockateil",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Dog",
  //     name: "Luna",
  //     bread: "Mixed",
  //   }),
  // ]);
  <>
    <h1>Adopt Me!</h1>
    <Pet name="luna" animal="Dog" bread="Havanese" />
    <Pet name="Yaya" animal="Bird" bread="Cockatiel" />
    <Pet name="Doink" animal="Cat" bread="Mixed" />
  </>;
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
