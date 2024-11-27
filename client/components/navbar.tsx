"use client"
import { LaptopMinimal, Menu, Search, ShoppingCart } from "lucide-react";
import { useCart } from "./hooks/cart-context";
import Link from "next/link";

const Navbar = () => {
    const {items} = useCart()
    return(
        <div className="h-12 border-b flex items-center justify-between">
            <Link href="/" className="flex text-xl font-bold gap-2 items-center">
                <LaptopMinimal size={32}/>
                <p>Silicone Market</p>
            </Link>
            <div className="flex justify-between gap-3 items-center font-semibold">
                <Link href="/cart" className="flex gap-2 relative">
                    <ShoppingCart/>
                    <p className="hidden md:block">Cart</p>
                    <p className="absolute -bottom-2 left-4 bg-muted text-muted-foreground text-xs w-4 h-4 flex items-center justify-center rounded-full">{items.length}</p>
                </Link>
                <Link href="/search" className="md:bg-muted flex gap-2 items-center md:p-1 md:pr-20 rounded-xl"><Search/><p className="hidden md:block text-muted-foreground">Search</p></Link>
                <Link href="" className="flex gap-2"><Menu/><p className="hidden md:block">Menu</p></Link>
            </div>
        </div>
    )
}

export default Navbar;
