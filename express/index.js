const e = require("express");
const express = require("express");
const app = express();

const port = 8080;

// app.get('/', (req, res) => {

//     res.send("hello world");
// })

// app.get('/hariom', (req, res) => {

//     res.send([
//         {
//             name: "hariom",
//             age: 20,
//             height: 5.8
//         },
//         {
//             name: "amratansh",
//             age: 19,
//             height: 5.7
//         },
//         {
//             name: "ritansh",
//             age: 20,
//             height: 5.75
//         }
//     ])
// })

// app.get('/family', (req, res) => {

//     res.send([

//         "papaji",
//         "mammi",
//         "shreesha chiraiya",
//         "gaurisha gataiur"
//     ])
// })


app.listen(port, () => {

    console.log("server is listening to the port", port);
})

// app.use((req, res) => {

//     console.log("request received");
//     res.send("<h1>hello hariom</h1><ul><li>aloo</li><li>bhata</li>");
// })

app.get('/hello', (req, res) => {

    res.send("hello world");
})

app.get('/*', (req, res) => {

    res.send("this path doesn't exist");
})
