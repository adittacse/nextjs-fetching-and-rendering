"use client";

import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    const cartInfo = {
        addToCart,
        cart
    }

    return (
        <CartContext value={cartInfo}>
            {children}
        </CartContext>
    );
};

export default CartProvider;