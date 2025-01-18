import { useState, useEffect } from "react";
import { getProducts, getProcuctsByCategory } from '../firebase/dataBase'
import ItemList from "./ItemList";
import { useParams } from "react-router";
import Spinner from 'react-bootstrap/Spinner';

function ItemListContainer() {
  const [cards, setCards] = useState([])
  const { category } = useParams()

  useEffect(() => {
    category ? getProcuctsByCategory(category, setCards) : getProducts(setCards)
  }, [category])

  if (cards == '') {
    return <div style={{ height: '400px' }} className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="primary" role="status"></Spinner>
    </div>
  }

  return (
    <>
      <ItemList cards={cards} />
    </>
  )
}

export default ItemListContainer;