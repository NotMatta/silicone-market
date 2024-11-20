import Product from "@/components/product-component";

const Page = async ({params}:{params: Promise<{ slug: string }>}) => {
    const {slug} = await params;
    return (
        <div>
            <Product id={slug} />
        </div>
    )
}

export default Page;
