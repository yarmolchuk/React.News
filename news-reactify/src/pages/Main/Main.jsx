import { useEffect, useState } from "react";
import { getNews } from "../../api/news";

import styles from "./styles.module.css";

import Banner from "../../components/Banner/Banner";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10
    const pageSize = 10

    const fetchNews = async (currentPage) => {
        setIsLoading(true);
        try {
            const response = await getNews(currentPage, pageSize);
            setNews(response.news);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage])

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <main className={styles.main}>
            { news.length > 0 && !isLoading ? (
                <Banner item = {news[0]}/> 
            ) : ( 
                <Skeleton type={"banner"} count={1} /> 
            )}

            <Pagination 
                handleNextPage = {handleNextPage}
                handlePreviousPage = {handlePreviousPage}
                handlePageClick = {handlePageClick}
                totalPages = {totalPages}
                currentPage = {currentPage}
            />

            {!isLoading ? (
                <NewsList news={news}/>
            ) : (
                <Skeleton type={"item"} count={10} />  
            )}

            <Pagination 
                handleNextPage = {handleNextPage}
                handlePreviousPage = {handlePreviousPage}
                handlePageClick = {handlePageClick}
                totalPages = {totalPages}
                currentPage = {currentPage}
            /> 
        </main>
    );
};

export default Main;
