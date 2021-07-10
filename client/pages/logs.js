import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import { getTableData } from '../modules/dashboard/dashboardLogic'
import { table } from '../lib/formats'
import { formatDate } from '../lib/dataFormat'


const Logs = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        let results = await getTableData()
        let reformatted = results.map(x => ({ ...x.buyer, date: formatDate(x.date) }))
        setData(reformatted)
    }, [])

    return (<div>
        <Sidebar active={1}>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
            <Table data={data} format={table} />
        </Sidebar>
    </div>);
}

export default Logs;