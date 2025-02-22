import { useContext } from 'react';
import CartContext from '../context/cartContext';
import { Link } from 'react-router';

function CartWidget() {
    const { numberCart } = useContext(CartContext)

    return (
        <div className="div__cart">
            <Link className='link_cart' to={'/cart'}>
                <img className="cart__img" width="64" height="64" src='/shopping-cart.png' alt="shopping-cart" />
                <span className="badge">{numberCart()}</span>
            </Link>
        </div>
    )
};

export default CartWidget;