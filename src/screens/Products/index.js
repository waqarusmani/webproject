import { useNavigate } from "react-router-dom"
import products from '../../utils/products.json'

// const products = [
//     {
//         name:"Test",
//         id:1
//     },
//     {
//         name:"Test",
//         id:2
//     },
//     {
//         name:"Test",
//         id:3
//     },
//     {
//         name:"Test",
//         id:4
//     },
// ]

export default function Products() {
    const navigate = useNavigate()


    return (
        <div>
            <h1>Products</h1>
            {products.map(product => (
                <div key={product.id}>
                    <label>{product.name}</label>
                    <label>{product.id}</label>
                    <button onClick={() => navigate('/products/' + product.id)}>Show Details</button>
                    <hr />
                </div>
            ))}
        </div>
    )
}