import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import Alerts from '../components/Alerts'
import { useState } from 'react'


const Index = () => {
    const [open, setOpen] = useState(true)

    return (
        <div>
            <Sidebar active={0}>

                <Alerts level="warning" open={open} onClose={() => { setOpen(false) }}>
                    This is an alert!
                </Alerts>
                <Card>
                    <h1>Title</h1>
                    This is a card content
                </Card>
                
            </Sidebar>
        </div>);
}

export default Index;