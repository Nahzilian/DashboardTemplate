import { useState, useEffect } from 'react'
import { capFirstLetter, arrayFormat, quickSort } from '../lib/dataFormat'

const Row = ({ fields, data}) => {
    return (
        <tr>
            {fields && fields.length > 0 ?
                fields.map((field, i) => <td key={`${field}-${i}`}>{data[field]}</td>)
                : ""}
        </tr>
    )
}

const Table = ({ data = [], format = [], filterFields = [] }) => {
    const [formatedData, setFormatedData] = useState([])
    useEffect(() => {
        if (data.length > 0 && format.length > 0)
            setFormatedData(arrayFormat(format, data))
    }, [data, format])

    const middlewareSort = (key) => {
        let newData = [...formatedData]
        quickSort(newData, key)
        setFormatedData(newData)
    }

    return (
        <table className="table table-light table-striped">
            <thead>
                <tr>
                    {format && format.length > 0 ?
                        format.map((header, index) => <th key={index} scope="col">
                            {capFirstLetter(header)}
                            {filterFields.includes(header) ? <i className="bi bi-arrow-down-short" onClick={() => middlewareSort(header)}></i> : null}
                        </th>)
                        : ""}
                </tr>
            </thead>
            <tbody>
                {formatedData && formatedData.length > 0 ? formatedData.map((row, i) => <Row fields={format} data={row} key={i}/>) : null}
            </tbody>
        </table>
    );
}

export default Table;