import { useState, useEffect } from 'react'
import { capFirstLetter, arrayFormat } from '../lib/dataFormat'

const Row = ({ fields, data}) => {
    return (
        <tr>
            {fields && fields.length > 0 ?
                fields.map((field, i) => <td key={`${field}-${i}`}>{data[field]}</td>)
                : ""}
        </tr>
    )
}

const Table = ({ data = [], format = [] }) => {
    const [formatedData, setFormatedData] = useState([])
    useEffect(() => {
        if (data.length > 0 && format.length > 0)
            setFormatedData(arrayFormat(format, data))
    }, [data, format])

    return (
        <table className="table table-light table-striped">
            <thead>
                <tr>
                    {format && format.length > 0 ?
                        format.map((header, index) => <th key={index} scope="col">{capFirstLetter(header)}</th>)
                        : ""}
                </tr>
            </thead>
            <tbody>
                {formatedData.length > 0 ? formatedData.map((row, i) => <Row fields={format} data={row} key={i}/>) : null}
            </tbody>
        </table>
    );
}

export default Table;