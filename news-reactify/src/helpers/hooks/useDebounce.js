import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handle = setTimeout(() => {
            setDebounceValue(value);
        }, delay)

        return () => {
            clearTimeout(handle)
        }

    }, [value, delay])

    return debouncedValue
}