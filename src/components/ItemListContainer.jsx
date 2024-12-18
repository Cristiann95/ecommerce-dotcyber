import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";

function ItemListContainer() {
    const [cards, setCards] = useState([])
    const {category} = useParams()

    const allProducts = 'https://dummyjson.com/products'
    const categoryProducts = `https://dummyjson.com/products/category/${category}`

    useEffect(() => {
        fetch(category ? categoryProducts : allProducts)
            .then(res => res.json())
            .then(res => setCards(res.products));
    }, [category, categoryProducts])

    return (
      <ItemList cards={cards}/>
    )
}

export default ItemListContainer;