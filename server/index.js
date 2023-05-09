const express = require('express');
const cors =require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

const users = [
    { id: 1, name:'Arefin', email: 'arefin@gmail.com' },
    { id: 2, name:'Arefin1', email: 'arefin1@gmail.com' },
    { id: 3, name:'Arefin2', email: 'arefin2@gmail.com' }
]

app.get('/', (req, res) => {
    res.send('Users Management server is running')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
})

