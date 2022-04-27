lg = require('./logger')
math = require('./calculator')
database = require('./db')

const express = require('express')
const app = express()

/*tBill='';
tAttendance=''
tDuration=''
tSeats=''
*/
function Greetings() {
    lg.Log(`Hello world ${3 + 2019}!`)
    lg.Log(`Hi! Welcome to ${2022}`)
    lg.Log('Use nodemon for hot reload')
}

function EventDetails() {
    tBill = `Total bill of event: ${math.sum(11000, 50)}`;
    tAttendance = `Total attendance of event: ${math.minus(1000, 13)}`
    tDuration = `Duration of event: ${math.product(5, 60)} minutes`
    tSeats = `Total Seats: ${math.divide(1200, 3)} units`
    lg.Log(tBill)
    lg.Log(tAttendance)
    lg.Log(tDuration)
    lg.Log(tSeats)
}

function EventAPIs() {
    app.get('/bill', (req, res) => {
        res.send(tBill)
    })

    app.get('/attendance', (req, res) => {
        res.send(tAttendance)
    })

    app.get('/duration', (req, res) => {
        res.send(tDuration)
    })

    app.get('/seats', (req, res) => {
        res.send(tSeats)
    })
}

async function GetCollection(collection) {    
    const vals = await database.Collection(collection);
    lg.Log(`${collection} data:`)
    lg.Log(vals)
    app.get(`/${collection}`, (req, res) => {
        res.send(vals)
    })
}
//--------------------------------------------------------------
Greetings()
EventDetails()
EventAPIs()

//--------------------------------------------------------------
database.ConnectDatabase();
GetCollection('practical')
GetCollection('theory')

//--------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('Heya there')
})

app.listen(3000, () => lg.Log('Server ready'))