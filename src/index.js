import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const hour = new Date().getHours();
const openHour = 12;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour;
console.log(isOpen);

const App = () => {
  //   if(hour>=openHour && hour<=closeHour){
  //     alert("We're Currently Open")
  //   }else{
  //     alert("Sorry we're closed")
  //   }

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

function Header() {
  // const style = { color: "red", fontSize: "40px", textTransform: "uppercase" }
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            ffrom our stone oven, all organic, all delicious
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza, index) => (
              <Pizza pizzaObj={pizza} key={index} />
            ))}
          </ul>
        </>
      ) : (
        "We are Still working with our menu"
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <Order closeHour={closeHour} openHour={openHour} />
        </div>
      ) : (
        <p>We are Currently open until {closeHour}:00 hours or order online</p>
      )}
    </footer>
  );
}

const Pizza = ({ pizzaObj }) => {

  return (
    <div className={!pizzaObj.soldOut?"pizza":"pizza sold-out"}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <li>
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut?'Sold Out': pizzaObj.price}</span>
      </li>
    </div>
  );
};

const Order = ({ closeHour, openHour }) => {
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 hours until {closeHour}:00 hours or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
