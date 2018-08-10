let express = require('express')
let bodyParser = require('body-parser')
let massive = require('massive')
require('dotenv').config()

let sc = require('./controller/simulation_controller')
let app = express()
app.use(bodyParser.json())


app.get('/api/simulation', sc.read)
app.post('/api/simulation', sc.create)
app.delete('/api/simulation/:id',sc.delete)



let port = 3010
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})