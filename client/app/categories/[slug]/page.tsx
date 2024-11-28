import SearchPage from "@/app/search/page";

const Page = async ({params}:{params: Promise<{ slug: string }>}) => {
    const {slug} = await params;
    return (
            <SearchPage category={slug} />
    )
}

export default Page;
