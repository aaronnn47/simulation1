let express = require('express')
let bodyParser = require('body-parser')
let massive = require('massive')
let app = express()
let sc = require('./controller/simulation_controller')
require('dotenv').config()
app.use(bodyParser.json())
app.use(express.static('public'))


const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
})

app.get('/api/products', sc.read)
app.post('/api/simulation/post', sc.create)
app.delete('/api/delete/:id',sc.delete)



app.listen( SERVER_PORT,()=>{
    console.log(`listening on port ${SERVER_PORT}`)
})