const express = require('express')
const app = express()
const cors = require('cors')
const purchases = require('./routes/purchases')

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use('/api/purchases', purchases)

app.listen(port, () => console.log(`Server is running on port ${port}`));