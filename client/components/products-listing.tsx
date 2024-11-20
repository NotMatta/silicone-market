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
            {data.listProducts.map((product:any,i:number) => <div key={i} className='border-black border m-2'>
                <img className='w-20 h-20 object-cover' src={product.image} alt="yee"/>
                <p>{product.title}</p>
                <p>{product.price}</p>
            </div>)}
        </div>
    )
}

export default ProductsListing;

