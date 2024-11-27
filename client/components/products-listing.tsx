"use client"
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useCart } from './hooks/cart-context';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';


const ProductsListing = ({keys,range}:{keys:string[],range:[number,number]}) => {
    const {addItem} = useCart()
    const router = useRouter();
    const stringKey = '["' + keys.join('", "') + '"]';
    const stringRange = '[' + range.join(',') + ']';
    const GET_PRODUCTS = gql`
        query GetProducts {
            listProducts(keys: ${stringKey},range: ${stringRange}) {
                id
                title
                price
                image
            }
        } 
    `
    const {loading,error,data} = useQuery(GET_PRODUCTS);

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
        <div className='flex flex-wrap'>
            {data.listProducts.map((product:{image:string,price:number,title:string,id:string},i:number) =>
                <div key={i} className='border bg-muted p-2 rounded-lg hover:scale-105 m-2 flex flex-col items-center font-semibold'>
                    <div onClick={() => {router.push(`product/${product.id}`)}} className='flex flex-col items-center'>
                        <img className='w-28 h-28 object-cover rounded' src={product.image} alt="yee"/>
                        <p>{product.title}</p>
                        <p className='text-green-400'>{product.price}$</p>
                    </div>
                    <Button onClick={() => addItem({id: product.id, quantity: 1})} className='w-full'><ShoppingCart/> Add to Cart</Button>
                </div>)
            }
        </div>
    )
}

export default ProductsListing;

