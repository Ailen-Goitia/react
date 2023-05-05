import CardWidgets from "./cardWidgets/cardWidgets";
const NavBar = () =>{
    return(
        <nav className="navBar">
            <h3> 🐾 Narices Frias</h3>
            <div>
                <button className="boton-navbar">Alimentos</button>
                <button className="boton-navbar">Accesorios</button>
                <button className="boton-navbar">Higiene</button>
                <button className="boton-navbar">Juguetes</button>
            </div>
            <CardWidgets/>
        </nav>
    )
}

export default NavBar;