import { useState } from 'react';
import ProductsContext from './productsContext';

function ProductsProvider({ children }) {
    const [products, setProducts] = useState([])
    const [value, setValue] = useState('')

    const handleProducts = (cards) => {
        setProducts(cards)
    }

    const getSearchValue = (inputValue) => {
        setValue(inputValue)
    }

    return (
        <ProductsContext.Provider value={{ products, setProducts, handleProducts, value, getSearchValue }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;