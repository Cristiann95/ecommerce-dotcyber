import { useEffect, useContext } from "react";
import { getProducts, getProcuctsByCategory, productsByName } from '../firebase/dataBase'
import ProducsContext from '../context/productsContext'
import ItemList from "./ItemList";
import { useParams, useLocation } from "react-router";
import Spinner from 'react-bootstrap/Spinner';
import SliderImages from "./SliderImages";


function ItemListContainer() {
  const { products, setProducts, value } = useContext(ProducsContext)
  const { category } = useParams()
  const location = useLocation()


  window.scrollTo(0, 0)

  useEffect(() => {
    if (category) {
      getProcuctsByCategory(category, setProducts)
    } else if (location.search) {
      productsByName(setProducts, value)
    } else {
      getProducts(setProducts)
    }
  }, [category, location])


  if (products == '') {
    return (
      <div style={{ height: '400px' }} className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" role="status"></Spinner>
      </div>
    )
  }

  return (
    <>
      <SliderImages />
      <ItemList cards={products} />
    </>
  )
}

export default ItemListContainer;