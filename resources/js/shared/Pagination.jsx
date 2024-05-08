import React, {useEffect, useMemo} from "react";

export default function Pagination({per_page, current_page, total, onPaginate}) {

    const [numPages, setNumPages] = React.useState(total > per_page ? Math.ceil(total/per_page) : 1);

    const [pageNumbers, setPageNumbers] = React.useState([]);

    useEffect(() => {
        const pageArr = [];
        if(numPages) {
            for(let i=1; i<= numPages; i++) {
                pageArr.push(i);
            }
            setPageNumbers(pageArr);
        }
    }, [numPages]);

    const numberClass = (number) => {
        if(number === current_page) {
            return "z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
        }

        return "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
    }

    return numPages > 1 ? (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm">
                {
                    current_page > 1 ? (
                        <li>
                            <a href="#"
                               onClick={event => { event.preventDefault(); onPaginate(current_page-1) }}
                               className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Previous</span>
                                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M5 1 1 5l4 4"/>
                                </svg>
                            </a>
                        </li>
                    ) : null
                }

                {
                   pageNumbers.map((e, i) => {
                        return (
                            <li key={i}>
                                <a href="#"
                                   onClick={event => { event.preventDefault(); onPaginate(e) }}
                                   className={numberClass(e)}>{e}</a>
                            </li>
                        )
                    })
                }

                {
                    current_page < numPages ? (
                        <li>
                            <a href="#"
                               onClick={event => { event.preventDefault(); onPaginate(current_page+1) }}
                               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="m1 9 4-4-4-4"/>
                                </svg>
                            </a>
                        </li>
                    ) : null
                }

            </ul>
        </nav>
    ) : null
}
