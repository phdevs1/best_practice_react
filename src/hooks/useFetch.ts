import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType
}


export const useFetch = <T>(url:string): Params<T> =>{
    const [data, setData] = useState<Data<T>>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType>(null);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch(url, controller);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result: T = await response.json();
                setData(result);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            controller.abort(); //como este controller esta asociado al fetch, al abortar se cancela la peticion
        };
        
    }, [url]);

    return { data, loading, error };
}