"use client"
import { LaptopMinimal, Menu, Search, ShoppingCart } from "lucide-react";
import { useCart } from "./hooks/cart-context";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

const SideBar = () => {
    return (
        <Sheet>
        <SheetTrigger className="flex gap-2">
            <Menu/><p className="hidden md:block">Menu</p>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle>Categories</SheetTitle>
            <SheetDescription>Choose a category</SheetDescription>
                <SheetClose asChild><Link href="/categories/cpu" className="p-2 hover:bg-muted rounded-xl">Processors</Link></SheetClose>
                <SheetClose asChild><Link href="/categories/gpu" className="p-2 hover:bg-muted rounded-xl">Graphics Cards</Link></SheetClose>
                <SheetClose asChild><Link href="/categories/ram" className="p-2 hover:bg-muted rounded-xl">Memory</Link></SheetClose>
                <SheetClose asChild><Link href="/categories/motherboard" className="p-2 hover:bg-muted rounded-xl">Motherboards</Link></SheetClose>
                <SheetClose asChild><Link href="/categories/storage" className="p-2 hover:bg-muted rounded-xl">Storage</Link></SheetClose>
                <SheetClose asChild><Link href="/categories/case" className="p-2 hover:bg-muted rounded-xl">Cases</Link></SheetClose>
                <SheetClose asChild><Link href="/categories/psu" className="p-2 hover:bg-muted rounded-xl">Power Supplies</Link></SheetClose>
            </SheetHeader>
        </SheetContent>
        </Sheet>
    );
}

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
                <SideBar/>
            </div>
        </div>
    )
}

export default Navbar;
