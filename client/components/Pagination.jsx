import { useState } from 'react'
import {usePagination, displayLimit} from '../lib/usePagination'

const Page = ({index, active, onClick}) => {
    return <li className={`page-item ${active=== index? 'active' : ''}`}><a className="page-link" onClick={onClick}>{index + 1}</a></li>
}


const Pagination = ({pageAmount}) => {
    const [{pages, curPage}, setPage] = usePagination({totalPage: pageAmount, page: 0})

    return (
        <nav aria-label="Log page navigation">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${ curPage > 0 ? '' : 'disabled'}`}>
                    <a className="page-link" aria-disabled="true" onClick={() => setPage(curPage - 1 )}>Previous</a>
                </li>
                {pages && pages.length > 0 ? 
                    pages.map((x) => <Page onClick={() => setPage(x)} index = {x} active = {curPage}/>)
                    : <Page index = {1}/>
                }
                <li className={`page-item ${curPage + displayLimit >= pageAmount? 'disabled' : ''}`}>
                    <a className="page-link" onClick={() => setPage(curPage + 1)}>Next</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;