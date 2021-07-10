import axios from 'axios'

const baseAPI = "http://localhost:5000"

export const getTableData = async (amount = 10) => {
    const { data } = await axios.get(`${baseAPI}/api/purchases?amount=${amount}`)
    return data
}