import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import Pagination from '../components/Pagination'
import { getTableData } from '../modules/dashboard/dashboardAPI'
import { table } from '../lib/formats'
import { formatDate } from '../lib/dataFormat'


const Logs = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(10);
    useEffect(async () => {
        let results = await getTableData(page, limit)
        let reformatted = results.map(x => ({ ...x.buyer, date: formatDate(x.date) }))
        setData(reformatted)
    }, [limit, page])


    return (
        <Sidebar active={1}>
            <div>
                Header or something
            </div>
            <div className="row">
                <div className="col"><Pagination pageAmount={8} callback={setPage} /></div>
                <div className="col d-flex justify-content-end" style={{paddingBottom: "1rem"}}>
                    <select name="limit" id="limit" onChange={(e) => setLimit(parseInt(e.target.value))}>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>

            <Table data={data} format={table} filterFields={["username","firstName", "lastName" ,"date", "id"]}/>
        </Sidebar>
    );
}

export default Logs;