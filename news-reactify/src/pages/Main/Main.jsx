import styles from "./styles.module.css";
import LatesNews from "../../components/LatesNews/LatesNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

import { getNews } from "../../api/news";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE } from "../../constant/constant";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

const Main = () => {
    const { filters, changeFilter } = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: ""
    });

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const {data, isLoading} = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords,
    });
        
    return (
        <main className={styles.main}> 
            <LatesNews isLoading={isLoading} banners={data && data.news} />
            <NewsByFilters news={data?.news} isLoading={isLoading} filters={filters} changeFilter={changeFilter} />
        </main>
    );
};

export default Main;