import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import NewsList from "../../components/NewsList/NewsList";
import styles from "./styles.module.css";
import { getNews } from "../../api/news";

const Main = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews  = async () => {
            try {
                const response = await getNews()
                setNews(response.news)
            } catch (error) {
                console.log(error);
            }
        }
        fetchNews()
    }, [])

    return (
        <main className={styles.main}>
            { news.length > 0 ? <Banner item = {news[0]}/> : null }

            <NewsList news={news}/> 
        </main>
    );
};

export default Main;