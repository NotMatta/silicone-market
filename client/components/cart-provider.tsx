"use client"
import { useState, useEffect } from "react";
import { cartContext, CartItem } from "./hooks/cart-context";

const CartProvider = ({children}:{children:React.ReactNode}) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [load,setLoad] = useState(false)
    const addItem = (item: CartItem) => {
        if (items.some((i) => i.id === item.id)) {
            setItems((prevItems) => prevItems.map((i) => i.id === item.id ? {...i, quantity: i.quantity + item.quantity} : i))
            return
        }
        setItems((prevItems) => [...prevItems, item])
    }
    const removeItem = (id: string) => setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    const clearCart = () => setItems([]);

    useEffect(() => {
        if(!load){
            const cart = window.localStorage.getItem('cart')
            if (cart) setItems(JSON.parse(cart))
            setLoad(true)
        }
    }, [load])

    useEffect(() => {
        if (!load) return
        localStorage.setItem('cart', JSON.stringify(items))
    }, [items,load])
    
    return (
        <cartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider
