import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { getTableData } from '../modules/dashboard/dashboardLogic'

const Index = () => {
    useEffect(() => {
        getTableData()
    }, [])
    return ( 
    <div>
        <Sidebar active={0}/>        
    </div> );
}
 
export default Index;