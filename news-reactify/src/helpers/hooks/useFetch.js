import { useEffect, useState, useMemo } from "react";

export const useFetch = (fetchFunction, params) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const stringParams = useMemo(
        () => params ? JSON.stringify(params) : "",
        [params ? JSON.stringify(params) : ""]
    );

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const result = await fetchFunction(params)
                setData(result)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stringParams])

    return { data, isLoading, error }
}