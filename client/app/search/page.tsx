"use client"

import ProductsListing from "@/components/products-listing"
import { Search } from "lucide-react"
import { useState } from "react"

const SearchPage = () => {
    const [input,setInput] = useState("")
    const [keys,setKeys] = useState<string[]>([""])
    const [range,setRange] = useState<[number,number]>([0,1000])
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Search Page</h1>
            <div className="flex w-full gap-2">
                <input className="flex-grow bg-muted p-2 rounded-xl" type="text" placeholder="Search here..." value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="bg-muted rounded-xl w-10 h-10 flex justify-center items-center" onClick={() => setKeys(input.split(' '))}><Search size={28}/></button>
            </div>
            {keys[0] != "" ? <ProductsListing keys={keys} range={range} /> : <div>Start searching :)</div>}
        </div>
    )
}

export default SearchPage;
