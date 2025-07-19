import { useEffect, useState } from "react";

export const PromiseError = () => {
    const [data, setData] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                throw new Error("This is a simulated error in Promise");
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            
            }
        };

        fetchData()
    }, []);

    if (error) {
        return <div> algo salio mal :  {error} </div>
    }
    return <div>{data}</div>
}