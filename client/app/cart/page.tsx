"use client"
import { useCart } from "@/components/hooks/cart-context";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { gql, useQuery } from "@apollo/client";
import { Trash } from "lucide-react";
import { useEffect, useState } from "react";

const CartPage = () => {

    const {items,removeItem,clearCart, editQuantity} = useCart()
    const [total,setTotal] = useState()

    const GET_CART = gql`
        query getCartProducts($ids: [ID]) {
                listCartProducts (ids: $ids){
                    title
                    image
                    price
                }
            }
    `

    const {loading,error,data} = useQuery(GET_CART,{
        variables: {
            ids: items.map((item) => item.id)
        }
    })

    useEffect(() => {
        if(data){
            setTotal(data.listCartProducts.reduce((acc:number,product:{price:number},i:number) => acc + product.price * items[i].quantity,0).toFixed(2))
        }
    },[items,data,total])


    if(error){
        return <div>An error occured</div>
    }

    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Cart Listing</h1>
            <table className="w-full border">
                <thead>
                <tr className="border text-left *:border *:p-2">
                    <th className="w-12">Image</th>
                    <th>Title</th>
                    <th className="w-16">Quantity</th>
                    <th className="w-20">Price</th>
                    <th className="w-10">Action</th>
                </tr>
                </thead>
                <tbody>
                {data.listCartProducts.map((product:{image:string,title:string,price:number},i:number) => (
                    <tr key={i} className="*:p-2">
                        <td><img src={product.image} alt="yee" className="w-full"/></td>
                        <td><p>{product.title}</p></td>
                        <td><Input value={String(items[i].quantity)} className="w-full" type="number" onChange={(e) => {editQuantity(items[i].id,Number(e.target.value))}} min={1} max={10}/></td>
                        <td><p>{product.price}$</p></td>
                        <td className="text-center"><button onClick={() => {
                            removeItem(items[i].id)
                        }}><Trash/></button></td>
                    </tr>)
                )}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={5}>
                    <hr/>
                    </td>
                </tr>
                <tr className="*:p-2">
                    <td colSpan={2}>Total</td>
                    <td>{items.reduce((acc,item) => acc + item.quantity,0)}</td>
                    <td>{total}$</td>
                </tr>
                <tr>
                    <td colSpan={5} className="text-right p-2 space-x-2">
                        <Button>Checkout</Button>
                        <Button onClick={() => clearCart()} variant="outline">Clear Cart</Button>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default CartPage
