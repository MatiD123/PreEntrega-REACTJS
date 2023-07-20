import CartWidget from "./CartWidget"
import "./styles.css"

function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <button>Inicio</button>
                <button>Catalogo</button>
                <button>Contacto</button>
            </div>

            <CartWidget />
        </nav>
    );
}
export default Navbar