import {usePagination, displayLimit} from '../lib/usePagination'

const Page = ({index, active, onClick}) => {
    return <li className={`page-item ${active=== index? 'active' : ''}`}><a className="page-link" onClick={onClick}>{index + 1}</a></li>
}


const Pagination = ({pageAmount, callback}) => {
    const [{pages, curPage}, setPage] = usePagination({totalPage: pageAmount, page: 0})

    const activePage = (page) => {
        callback(page)
        setPage(page)
    }

    return (
        <nav aria-label="Log page navigation">
            <ul className="pagination">
                <li className={`page-item ${ curPage > 0 ? '' : 'disabled'}`}>
                    <a className="page-link" aria-disabled="true" onClick={() => activePage(curPage - 1 )}>Previous</a>
                </li>
                {pages && pages.length > 0 ? 
                    pages.map((x, i) => <Page onClick={() => activePage(x)} index = {x} active = {curPage} key={i}/>)
                    : <Page index = {1}/>
                }
                <li className={`page-item ${curPage + displayLimit >= pageAmount? 'disabled' : ''}`}>
                    <a className="page-link" onClick={() => activePage(curPage + 1)}>Next</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;