import { useContext } from 'react';
import CartContext from '../context/cartContext';
import { Link } from 'react-router';

function CartWidget() {
    const { getQuantities } = useContext(CartContext)

    return (
        <div className="div__cart">
            <Link className='link_cart' to={'/cart'}>
                <img className="cart__img" width="64" height="64" src='./src/assets/shopping-cart.png' alt="shopping-cart" />
                <span className="badge">{getQuantities()}</span>
            </Link>
        </div>
    )
};

export default CartWidget;