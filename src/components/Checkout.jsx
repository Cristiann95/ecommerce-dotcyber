import { useState, useContext } from 'react'
import { createOrder } from '../firebase/dataBase'
import CartContext from '../context/cartContext'
import { serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router'
import CheckoutForm from './CheckoutForm'


function Checkout() {
    const [validated, setValidated] = useState(false);
    const { getTotal, cart, emptyCart } = useContext(CartContext)
    const navigate = useNavigate()
    const returnHome = () => {
        navigate('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const { email, name, phone, address } = form

        const order = {
            buyer: { name: name.value, email: email.value, phone: phone.value, address: address.value },
            total: getTotal(),
            items: cart,
            time: serverTimestamp()
        }

        if (form.checkValidity() === false) {
            console.log('Faltan completar campos')
        } else {
            createOrder(order)
            setValidated(true)
            setTimeout(() => {
                returnHome()
                emptyCart()
            }, 2000);
        }
    }


    return (
        <>
            <h2 className='text-center'>Completá tus datos</h2>
            <CheckoutForm validated={validated} handleSubmit={handleSubmit}></CheckoutForm>
        </>
    )
}

export default Checkout