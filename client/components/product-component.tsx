"use client"
import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useCart } from './hooks/cart-context';

const Product = ({id}:{id:number | string}) => {
    const GET_PRODUCTS = gql`
        query GetProducts {
            product (id:${String(id)}) {
                id
                title
                price
                image
                description
            }
        } 
    `
    const {loading,error,data} = useQuery(GET_PRODUCTS);
    const [count,setCount] = useState(0)
    const {addItem} = useCart();

    useEffect(() => {
        console.log(data)
    },[data])
    if(loading){
        return <div>Slow ahh network</div>
    }
    if(error){
        return <div>Something went wrong</div>
    }
    return (
        <div className='flex gap-4 flex-col md:flex-row'>
            <div className='w-full mx-auto max-w-[300px] max-h-[300px]'>
                <img src={data.product.image} alt="yee"/>
            </div>
            <div className='flex-grow flex gap-4 flex-col md:flex-row items-center font-bold h-full'>
                <div className='flex-grow h-full'>
                    <p className='font-bold text-3xl'>{data.product.title}</p>
                    <p>{data.product.description}</p>
                </div>
                <div className='min-w-[200px] w-full mx-4 md:max-w-[280px] h-full border rounded-xl flex flex-col items-center p-2 gap-2'>
                    <p className="font-bold text-xl">Price: {data.product.price}$</p>
                    <p>
                        <Label className='font-bold' htmlFor="q">Quantity</Label>
                        <Input id="q" type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} min={1} max={10} defaultValue={1}/>
                    </p>
                    <Button onClick={() => {
                        addItem({
                            id: data.product.id,
                            quantity: count
                        })
                    }} className='w-full'>Add to Cart</Button>
                    <Button className='w-full' variant="secondary">Buy now</Button>
                </div>
            </div>
        </div>
    )
}

export default Product;
