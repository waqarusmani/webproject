import { useNavigate } from "react-router-dom"
import Slide from './Slider/Slide'
import Cards from './Cards/Cards'



function Home() {

    const navigate = useNavigate()


    return (
        <div>
            {/* <h1>Home</h1>
            <button onClick={() => { navigate('/products') }}
            >Go To Products</button> */}
            {/* <Slide /> */}
            <Cards />
            <button onClick={() => { navigate('/products') }}>Show More..</button>
        </div>
    )
}

export default Home