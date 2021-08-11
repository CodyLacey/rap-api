const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'sippy cup',
        'birthLocation': 'London, England'
    },
    'shance the rapper': {
        'age': 28,
        'birthName': 'Chancellor',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 28,
        'birthName': 'dylan',
        'birthLocation': 'dylan'
    }
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (req, res) => {
    const rapName = req.params.rapperName.toLocaleLowerCase()
    if(rappers[rapName]){
        res.json(rappers[rapName])    
    }else{
        res.json(rappers['dylan'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
})