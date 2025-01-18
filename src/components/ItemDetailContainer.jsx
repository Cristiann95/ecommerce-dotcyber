import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {getSingleProduct} from '../firebase/dataBase'
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        getSingleProduct(id, setDetail)
    }, [id])
    
    return (
        <ItemDetail detail={detail}/>
    )
}

export default ItemDetailContainer;