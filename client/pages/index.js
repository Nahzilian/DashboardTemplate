import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import Alerts from '../components/Alerts'
import { useState } from 'react'
import { LineChart } from '../components/Charts'

const Index = () => {
    const [open, setOpen] = useState(true)

    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };

    return (
        <div>
            <Sidebar active={0}>

                <Alerts level="warning" open={open} onClose={() => { setOpen(false) }}>
                    This is an alert!
                </Alerts>
                <Card>
                    <h1>Title</h1>
                    This is a card content

                    <LineChart data={data}/>
                </Card>
                
            </Sidebar>
        </div>);
}

export default Index;