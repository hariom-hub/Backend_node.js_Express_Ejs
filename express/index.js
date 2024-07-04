const e = require("express");
const express = require("express");
const app = express();

const port = 8080;

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

// app.get('/*', (req, res) => {

//     res.send("this path doesn't exist");
// })

//path parameters


// app.get("/:username/:age",(req,res)=>{

//     let {username,age} = req.params;
//     console.log(req.params);
//     let page = (`<h1>This is a page for <u>${username} </u>, age = ${age}</h1>`);
//     res.send(page)
// })

app.get('/search', (req, res) => {

    let {q} = req.query;

    if(!q){
        res.sendStatus(404);
    }
    res.send(`These are the search results for the queries ${q}`)
})