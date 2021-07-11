import { useState, useEffect } from 'react'

export const displayLimit = 7

export const usePagination = ({ totalPage, page }) => {
    /**
     * Google pagination UI design:
     * Case 1: 1 2 3 4 5 6 7 8 9 10 Next >
     * Case 2: < Prev 3 4 5 6 7 8 9 10 11 12 Next >
     * Case 3: < Prev 5 6 7 8 9 10 11 12 13 14 
     */
    const [curPage, setCurPage] = useState(parseInt(page))
    const [pages, setPages] = useState([])
    const [minmax, setMinmax] = useState({min: 0, max: displayLimit})


    const pageCalculation = () => {
        if(curPage <= totalPage) {
            let range = Array(displayLimit)
            let midBreakPoint = Math.floor((minmax.max + minmax.min)/2)
            let start = curPage + displayLimit > totalPage ? totalPage - displayLimit : curPage
            let arr = [...range.keys()].map(i => i + start)
            
            if(!pages.length) setPages(arr)
            if(curPage >= midBreakPoint) setPages(arr)
            if(curPage === 0) setPages(arr)
        }
    }
    useEffect(() => {
        setMinmax({min: pages[0], max: pages[displayLimit - 1]})
    }, [pages])

    useEffect(() => {
        pageCalculation()
    }, [curPage])

    return [
        {
            pages,
            curPage
        },
        setCurPage
    ]
}