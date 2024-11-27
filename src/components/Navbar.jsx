import CartWidget from "./CartWidget";


function Navbar() {
    return (

        <header>
            <nav className="nav">
                <div className="div__titulo">
                    <h1>DotCyber</h1>
                </div>
                <ul className="categorias">
                    <li><a href="#">Smartphones</a></li>
                    <li><a href="#">Laptops</a></li>
                    <li><a href="#">Tablets</a></li>
                    <li><a href="#">Accesorios</a></li>
                </ul>
                <CartWidget />
            </nav>
        </header>


    )
}

export default Navbar;