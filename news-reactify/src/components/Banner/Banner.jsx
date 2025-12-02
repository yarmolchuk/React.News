import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import withSkeleton from "../../helpers/hock/withSkeleton.jsx";
import Image from "../Image/Image.jsx";
import styles from "./styles.module.css";

const Banner = ({item}) => {
    return (
        <div className={styles.banner}>
            <Image image={item?.image} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    );
};

const NewsBannerWithSkeleton = withSkeleton(Banner, "banner", 1);

export default NewsBannerWithSkeleton;