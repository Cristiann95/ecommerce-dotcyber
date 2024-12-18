import ItemCount from './ItemCount'

function ItemDetail({ detail }) {
    return (
        <div className='div-detail'>
            <h2>{detail?.title}</h2>
            <img src={detail?.thumbnail} alt={detail?.title} />
            <p>Puntuación: {detail?.rating}</p>
            <p>Stock: {detail?.stock}</p>
            <p>Peso: {detail?.weight}00grs</p>
            <p>{detail?.description}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetail;