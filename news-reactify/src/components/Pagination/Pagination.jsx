import styles from "./styles.module.css";

const Pagination = ({
    handleNextPage, 
    handlePreviousPage, 
    handlePageClick, 
    totalPages = 10,
    currentPage 
}) => {
    return (
        <div className={styles.pagination}>
            <button disabled={currentPage <= 1} onClick={handlePreviousPage} className={styles.arrow}>{`<`}</button>
            <div className={styles.list}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        onClick={() => handlePageClick(index + 1)}
                        className={styles.number} 
                        key={index}
                        disabled={index + 1 === currentPage}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <button disabled={currentPage >= totalPages} onClick={handleNextPage} className={styles.arrow}>{`>`}</button>
        </div>
    );
};

export default Pagination;
