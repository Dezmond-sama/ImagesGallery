import Gallery from "@/components/Gallery";
import Pagination from "@/components/Pagination";
import { getFilesCount, getPagesCount } from "@/lib/fetchImages";
import { clamp } from "@/lib/numbers";
import { stringToInt } from "@/lib/stringToInt";
type SearchParams = {
    page?: string;
    limit?: string;
};
type Props = {
    searchParams: SearchParams;
};
const Home = async ({ searchParams }: Props) => {
    const page = Math.max(1, stringToInt(searchParams.page, 1));
    const limit = clamp(
        stringToInt(searchParams.limit, 12),
        1,
        getFilesCount()
    );

    const link = (page: number): string => {
        return `?${new URLSearchParams({
            ...searchParams,
            page: page.toString(),
        })}`;
    };

    return (
        <>
            <Gallery imageWidth={500} page={page} limit={limit} />
            <Pagination page={page} total={getPagesCount(limit)} link={link} />
        </>
    );
};

export default Home;
