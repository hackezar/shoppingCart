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
    const [cartContent, setCartContent] = useState([]);

    return (
        <>
            <Navbar cartCount={cartCount} cartContent={cartContent}/>
            <Outlet context={[cartCount, setCartCount, cartContent, setCartContent]}/> {/* Where Nested Routes will Render */}
            <Footer />
        </>
    )
}

export default App