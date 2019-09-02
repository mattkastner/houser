require('dotenv').config()

const cors = require('cors')
const express = require('express')
const massive = require('massive')

const dashCtrl = require('./controllers/dashboardContoller')

const {CONNECTION_STRING, SERVER_PORT} = process.env

const app = express()

app.use(cors())
app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DATABASE')
})

app.get('/api/house/get', dashCtrl.getAllHouses)
app.post('/api/house/add', dashCtrl.addHouse)
app.delete('/api/house/delete/:id', dashCtrl.deleteHouse)

app.listen(SERVER_PORT, () => {
    console.log(SERVER_PORT +' SERVER')
})
