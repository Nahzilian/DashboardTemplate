import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
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
            <Pagination pageAmount={8}/>
            <div className="container">
            <Table data={data} format={table} />
                <div className="row">
                    <Card grid={3}>
                        asdad
                    </Card>
                        <Card grid={3}>
                        asdad
                    </Card>
                        <Card grid={3}>
                        asdad
                    </Card>
                    <Card grid={3}>
                        asdad
                    </Card>
                </div>
            </div>

        </Sidebar>
    </div>);
}

export default Logs;