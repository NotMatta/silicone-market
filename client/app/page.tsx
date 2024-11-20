import ProductsListing from "@/components/products-listing";

const Page = () => {
    return (
        <div>
            <ProductsListing keys={['cpu','hot']} range={[0,500]} />
        </div>
    )
}

export default Page;
