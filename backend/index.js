// const fs = require('fs')
// console.log("1")
// // fs.writeFileSync('example.txt','hello world')
// // const data = fs.readFileSync('example.txt','utf-8')

// // console.log(data)


// // fs.writeFile('example.txt', 'hellojack', () => { console.log('write')})
// // fs.copyFile('example.txt','example1.txt',(error,data)=>{error ? console.log(error) : console.log("data "+data) })
// // fs.readFile('example1.txt', 'utf-8', (error, data) => { error ? console.log(error) : console.log("read "+data) })
// fs.appendFile('example.txt','hi john\n',()=>{})
// console.log("2")




// const http = require('http');


// const server = http.createServer((req, res) => {
//     // Set the response header
//     res.setHeader('Content-Type', 'text/html');

//     // Handle different routes
//     if (req.url === '/') {
//         res.statusCode = 200;
//         res.end('<h1>Welcome to the Home Page</h1>');
//     } else if (req.url === '/about') {
//         res.statusCode = 200;
//         res.end('<h1>About Us</h1>');
//     } else if (req.url === '/contact') {
//         res.statusCode = 200;
//         res.end('<h1>Contact Us</h1>');
//     } else {
//         res.statusCode = 404;
//         res.end('<h1>404 Not Found</h1>');
//     }
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });




const express = require('express');
const app = express()
app.use(express.json())
const axios = require('axios');

const User = [
    {
        id: 45,
        name: 'john'
    },
    {
        id: 46,
        name: 'jack'
    }
]
app.get('/user', async (req, res) => {
    try {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        // res.json(response.data)
        res.json(User)
    }
    catch (error) {
        console.log(error)
    }
})


app.post('/user', (req, res) => {
    try {
        const data = { id: req.body.id, name: req.body.name }
        if (data.id == "" || data.name == "") {
            res.send('id and name are empty')
        }
        else {
            User.push(data)
            res.send('done')
        }
    }
    catch (error) {
        console.log(error)
    }
})


app.put('/user/:emp', (req, res) => {
    try {
        const data = req.params.emp
        const data1 = User.find(i => i.id == data)
        if (!data1) {
            res.status(404).send(`User not found`)
        }
        else {
            // console.log(data1.id)
            // console.log(data1.name)

            // data1.id = req.body.id
            data1.name = req.body.name

            res.send('data updated successfully')
        }
    }
    catch (error) {
        res.status(500).send(`Error: ${error}`)
    }
})

app.delete('/user/:id', (req, res) => {
    try {
        const id = req.params.id
        // console.log(id)
        const data = User.findIndex(i => i.id == id)
        console.log(data)
        if (data == -1) {
            throw new Error(`User not found`)
        }
        else {
            User.splice(data, 1)
            res.send('done')
        }
        res.send('done')
    }
    catch(err){
        console.log(`Error: ${err}`)
    }
})



app.listen(5001, () => {
    console.log('server is runnind..')
})





