import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";
import Banner from "../Banner/Banner.jsx";
import styles from "./styles.module.css";

const BannersList = ({ banners }) => {
    return (
        <ul className={styles.banners}> 
            {banners?.map( banner => {
                return (
                    <Banner key={banner.id} item={banner} />
                )
            })}
        </ul>
    );
};

const BannerListWithSkeleton = withSkeleton(BannersList, "banner", 10, 'row');

export default BannerListWithSkeleton;