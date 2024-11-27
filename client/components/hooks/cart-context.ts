"use client"
import { createContext, useContext } from "react";

export interface CartItem {
    id: string
    quantity: number
};

export interface Cart {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (id: string) => void
    clearCart: () => void
}

export const cartContext = createContext<Cart>({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {}
});

export const useCart = () => useContext(cartContext);

