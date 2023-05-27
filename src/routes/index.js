
import { createBrowserRouter } from 'react-router-dom';
import { Home, Products, ProductDetails } from '../screens'

const homeRoute = {
    path:'/',
    element: <Home />
}

const productsRoute = {
    path:'/products',
    element: <Products />,
}

const productsDetailsRoute = {
    path:'/products/:productId',
    element: <ProductDetails />,
}



const routes = createBrowserRouter([
    homeRoute,
    productsRoute,
    productsDetailsRoute
])

export default routes;