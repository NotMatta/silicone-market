"use client"
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';


const ProductsListing = ({keys,range}:{keys:string[],range:[number,number]}) => {
    const stringKey = '["' + keys.join('", "') + '"]';
    const stringRange = '[' + range.join(',') + ']';
    const GET_PRODUCTS = gql`
        query GetProducts {
            listProducts(keys: ${stringKey},range: ${stringRange}) {
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
        <div className='border flex flex-wrap'>
            {data.listProducts.map((product:any,i:number) => <div key={i} className='border bg-muted p-2 rounded-lg hover:scale-105 m-2 flex flex-col items-center font-semibold'>
                <img className='w-28 h-28 object-cover rounded' src={product.image} alt="yee"/>
                <p>{product.title}</p>
                <p className='text-green-400'>{product.price}$</p>
            </div>)}
        </div>
    )
}

export default ProductsListing;

