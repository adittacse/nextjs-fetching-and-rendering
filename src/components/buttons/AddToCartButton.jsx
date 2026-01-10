"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/contexts/CartProvider";

const AddToCartButton = ({ food }) => {
    const [inCart, setInCart] = useState(false);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(food);
        setInCart(true);
    }

    return (
        <button onClick={handleAddToCart} disabled={inCart} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-500">
            {
                inCart ? "Added" : "Add To Cart"
            }
        </button>
    );
};

export default AddToCartButton;