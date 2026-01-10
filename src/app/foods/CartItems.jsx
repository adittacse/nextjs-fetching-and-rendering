"use client";

import { useContext } from "react";
import { CartContext } from "@/contexts/CartProvider";

const CartItems = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            {cart.length} Items Added
        </div>
    );
};

export default CartItems;