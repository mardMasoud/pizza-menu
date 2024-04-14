import "./index.css";
import "./data.js";
import pizzaData from "./data.js";

export default function App() {
    return (
        <div className="container">
            <h1>Hello React!</h1>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}
function Header() {
    return (
        <header className="header">
            <h1>Fast React PizzaCo.</h1>
        </header>
    );
}
function Menu() {
    const pizass = pizzaData;
    const numPizzas = pizass.length;
    return (
        <main className="menu">
            <h2>Our menu</h2>
            {numPizzas > 0 ? (
                <ul className="pizzas">
                    {pizass.map((pizza) => (
                        <Pizza pizzaobj={pizza} key={pizza.name} />
                    ))}
                </ul>
            ) : (
                <p>We`re still working on our menu </p>
            )}
        </main>
    );
}
function Pizza({ pizzaobj }) {
    return (
        <li className={`pizza ${pizzaobj.soldOut?'sold-out':''}`}>
            <img src={pizzaobj.photoName} alt="#" />
            <div>
                <h3>{pizzaobj.name}</h3>
                <p>{pizzaobj.ingredients}</p>
                <span>{pizzaobj.soldOut ? "SOLDOUT" : pizzaobj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 11;
    const closeHour = 17;
    const isOpen = hour >= openHour && hour <= closeHour;
    if (!isOpen) return <p>Closed</p>;
    return (
        <footer className="footer">
            <Order closeHour={closeHour} />
        </footer>
    );
}
function Order({ closeHour }) {
    return (
        <div className="order">
            <p>We're open until {closeHour}:00 Come visit us or order online.</p>
            <button className="btn">Order</button>
        </div>
    );
}
