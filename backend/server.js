
const express = require('express');
const app = express()
app.use(express.json())
require('./config/db')

app.use('/api', require('./Router/router'))



// middleware example

// const middleware = (req, res, next) => {
//     // coode
//     let a = 5;
//     console.log('first middleware')
//     req.data = a
//     next()
// }

// app.get('/middle', middleware, (req, res) => {
//     console.log(`Vale of A:${req.data}`)
// })


// example 2
// app.get('/middle', (req, res, next) => {
//     console.log(`first Middleware`)
//     next()
// }, (req, res, next) => {
//     console.log(`second Middleware`)
//     next()
// }, (req, res, next) => {
//     console.log(`third Middleware`)
//     next()
// }, (req, res) => {
//     console.log(`final callback`)
// })



const port = 5001
app.listen(port, () => {
    console.log(`server is runnind on ${port}`)
})

