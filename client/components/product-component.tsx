"use client"
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';


const Product = ({id}:{id:number | string}) => {
    const GET_PRODUCTS = gql`
        query GetProducts {
            product (id:${String(id)}) {
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
        <div className='border'>
            {data.product.title}
            <img src={data.product.image} alt="yee"/>
        </div>
    )
}

export default Product;
