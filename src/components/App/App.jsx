import Navbar from "../Navbar/Navbar"
import Homepage from '../../components/Homepage/Homepage'
import ShopPage from '../../components/ShopPage/ShopPage'
import Footer from '../../components/Footer/Footer'
import { Route, Routes, Outlet } from "react-router-dom" 

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
    return (
        <>
            <Navbar />
            <Outlet /> {/* Where Nested Routes will Render */}
            <Footer />
        </>
    )
}

export default App