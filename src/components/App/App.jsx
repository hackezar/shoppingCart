import Navbar from "../Navbar/Navbar"
import Homepage from '../../components/Homepage/Homepage'
import ShopPage from '../../components/ShopPage/ShopPage'
import Footer from '../../components/Footer/Footer'
import { Route, Routes, Outlet } from "react-router-dom" 
import { useState } from "react"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Homepage />} />
                <Route path="/shop" element={<ShopPage />} />
            </Route>
      </Routes>
    )
}

const Layout = () => {
    const [cartCount, setCartCount] = useState(0);
    console.log(cartCount)
    return (
        <>
            <Navbar cartCount={cartCount}/>
            <Outlet context={[cartCount, setCartCount]}/> {/* Where Nested Routes will Render */}
            <Footer />
        </>
    )
}

export default App