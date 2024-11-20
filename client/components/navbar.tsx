import { LaptopMinimal, Menu, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
    return(
        <div className="h-12 border-b flex items-center justify-between">
            <a href="/" className="flex text-xl font-bold gap-2 items-center">
                <LaptopMinimal size={32}/>
                <p>Silicone Market</p>
            </a>
            <div className="flex justify-between gap-3 items-center font-semibold">
                <a href="" className="flex gap-2"><ShoppingCart/><p className="hidden md:block">Cart</p></a>
                <a href="/search" className="md:bg-muted flex gap-2 items-center md:p-1 md:pr-20 rounded-xl"><Search/><p className="hidden md:block text-muted-foreground">Search</p></a>
                <a href="" className="flex gap-2"><Menu/><p className="hidden md:block">Menu</p></a>
            </div>
        </div>
    )
}

export default Navbar;
