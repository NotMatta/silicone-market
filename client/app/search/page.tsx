"use client"

import ProductsListing from "@/components/products-listing"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

const SearchPage = ({category}:{category?:string}) => {
    const [input,setInput] = useState("")
    const [keys,setKeys] = useState<string[]>([""])
    const [inputRange,setInputRange] = useState<[number,number]>([0,1000])
    const [range,setRange] = useState<[number,number]>([0,1000])
    console.log(category)
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">Search {category? category : "Product"}s</h1>
            <form className="flex w-full gap-2" onSubmit={(e) => {
                e.preventDefault()
                setKeys(input.split(' '))
                setRange(inputRange)
            }}>
                <Input className="flex-grow bg-muted p-2 rounded-xl" type="text" placeholder="Search here..." value={input} onChange={(e) => setInput(e.target.value)} />
                <Input className="bg-muted w-20 p-2 rounded-xl" type="number" value={String(inputRange[0])} onChange={(e) => setInputRange([Number(e.target.value),inputRange[1]])} />
                <Input className="bg-muted w-20 p-2 rounded-xl" type="number" value={String(inputRange[1])} onChange={(e) => setInputRange([inputRange[0],Number(e.target.value)])} />
                <button className="bg-muted rounded-xl min-w-10 w-10 h-10 flex justify-center items-center" type="submit" ><Search size={28}/></button>
            </form>
            {keys[0] != "" ? <ProductsListing keys={keys} range={range} category={category} /> : <div>Start searching :)</div>}
        </div>
    )
}

export default SearchPage;
