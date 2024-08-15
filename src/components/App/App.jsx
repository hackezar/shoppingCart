import Navbar from "../Navbar/Navbar"
import Homepage from '../../components/Homepage/Homepage'
import ShopPage from '../../components/ShopPage/ShopPage'
import Footer from '../../components/Footer/Footer'
import { Route, Routes, Outlet } from "react-router-dom" 
import { useState } from "react"
import styles from './App.module.css'

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
    const [loading, setLoading] = useState(false);

    const updateItemQuantity = (value, id) => {
        if (value !== ""){
            const newCart = cartContent.map((item) => {
                if (item.id === id) {
                    item.quantity = value;
                    return item;
                } else
                    return item;
            })
            setCartContent(newCart);
        }
    }

    const deleteCartContent = (item) => {
        const newCart = cartContent.filter((cartItem) => cartItem.id !== item.id)
        setCartCount(newCart.length);
        setCartContent(newCart);
    }

    const mockSubmitCheckout = () => {
        console.log('fired');
        setLoading(true);
        setTimeout(function() {
            setCartContent(0);
            setCartContent([]);
            setLoading(false);
        }, 4000)
    }

    return (
        <div className={styles.app}>
            <Navbar cartCount={cartCount}
                    cartContent={cartContent} 
                    updateItemQuantity={updateItemQuantity} 
                    deleteCartContent={deleteCartContent} 
                    submitCheckout={() => mockSubmitCheckout()}
                    loading={loading}/>
            <Outlet context={[cartCount, setCartCount, cartContent, setCartContent]}/> {/* Where Nested Routes will Render */}
            <Footer />
        </div>
    )
}

export default App