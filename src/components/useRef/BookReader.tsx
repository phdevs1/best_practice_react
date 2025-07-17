import { useRef, useState } from "react";

export const BookReader = () => {
    const currentPageRef = useRef<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const nextPage = () => {
        currentPageRef.current += 1;
        console.log(`avanzaste al pagina: ${currentPageRef.current}`);
    }

    const previousPage = () => {
        if (currentPageRef.current === 1) {
            console.log("no puedes retroceder mas");
            return;
        }
        currentPageRef.current -= 1;
        console.log(`retrocediste a la pagina: ${currentPageRef.current}`);
    }

    const goToPage = (page: number) => {
        if (page < 1) {
            console.log("no puedes ir a una pagina menor a 1");
            return;
        }
        currentPageRef.current = page;
        setCurrentPage(page);
        console.log(`fuiste a la pagina: ${currentPageRef.current}`);
    }

    return (
        <div>
            <h1>Book Reader</h1>
            <p>Current Page: {currentPageRef.current}</p>
            <p>Current Page STATE: {currentPage}</p>
            <button onClick={nextPage}>Next Page</button>
            <button onClick={previousPage}>Previous Page</button>
            <button onClick={() => goToPage(5)}>Go to Page 5</button>
        </div>
    );
}