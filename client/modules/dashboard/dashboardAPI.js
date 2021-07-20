import axios from 'axios'

const baseAPI = "http://localhost:5000"

export const getTableData = async (amount = 10, limit = 10) => {
    const { data } = await axios.get(`${baseAPI}/api/purchases?page=${amount}&limit=${limit}`)
    return data
}