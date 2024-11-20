"use client"

import ProductsListing from "@/components/products-listing"
import { useState } from "react"

const SearchPage = () => {
    const [input,setInput] = useState("")
    const [keys,setKeys] = useState<string[]>([""])
    const [range,setRange] = useState<[number,number]>([0,500])
    return (
        <div>
            <h1>Search Page</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => setKeys(input.split(' '))}>Search</button>
            <ProductsListing keys={keys} range={range} />
        </div>
    )
}

export default SearchPage;
