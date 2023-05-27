import { useParams } from "react-router-dom"
import products from '../../utils/products.json'
import { useState } from "react"


export default function ProductDetails() {
    const { productId } = useParams()
    const [selectedProduct] =useState (products.find(product => product.id == productId))
    console.log("🚀 ~ file: productDetails.js:9 ~ ProductDetails ~ selectedProduct:", selectedProduct)

    return (
        <div>
            <h1>Products Details</h1>
            <h1>Products ID {productId}</h1>
            <label>{selectedProduct.size}</label>
        </div>
    )
}