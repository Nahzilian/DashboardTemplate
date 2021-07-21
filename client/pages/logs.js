import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import Pagination from '../components/Pagination'
import Card from '../components/Card'
import { getTableData } from '../modules/dashboard/dashboardAPI'
import { table } from '../lib/formats'
import { formatDate, sumArr, itemCounter } from '../lib/dataFormat'

import DoughnutChart from '../components/DoughnutChart'


const Logs = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [sales, setSales] = useState(0)
    const [pie, setPie] = useState({})


    useEffect(async () => {
        let results = await getTableData(page, limit)
        let reformatted = results.map(x => ({ ...x.buyer, date: formatDate(x.date) }))
        let product = results.map(x => (x.products)).flat()
        let totalPrices = results.map(x => (x.totalPrice))
        setSales(sumArr(totalPrices))
        setData(reformatted)

        let prodMapCount = itemCounter(product,"productName")
        setPie({
            labels: Array.from(prodMapCount.keys()),
            datasets: [
                {
                    label: '# of Votes',
                    data: Array.from(prodMapCount.values()),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                }
            ],
        })

    }, [limit, page])


    return (
        <Sidebar active={1}>
            <h1>
                Header or something
            </h1>
            <div className="row">
                <Card className="col-lg-12 col-xl-6">
                    <h6>Product Popularity</h6>
                    <DoughnutChart data={pie}/>
                </Card>

                <Card className="col-lg-12 col-xl-6">
                    <h6>Profit</h6>
                    <hr/>
                    <div>Total profit earned: {sales.toFixed(2)} $</div>
                    <div>Taxed: {(sales*0.13).toFixed(2)} $</div>
                    <div>Taxed: {(sales*0.13).toFixed(2)} $</div>
                </Card>

            </div>
            <br />
            <div className="row">
                <div className="col"><Pagination pageAmount={8} callback={setPage} /></div>

                <div className="col d-flex justify-content-end" style={{ paddingBottom: "1rem" }}>
                    <select name="limit" id="limit" onChange={(e) => setLimit(parseInt(e.target.value))}>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>

            <Table data={data} format={table} filterFields={["username", "firstName", "lastName", "date", "id"]} />
        </Sidebar>
    );
}

export default Logs;