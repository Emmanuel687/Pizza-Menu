import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <>
      <h1>Hello World</h1>;
      <Pizza />
    </>
  );
};

const Pizza = () => {
  return <h1>Pizza</h1>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
