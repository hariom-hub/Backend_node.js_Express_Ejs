const express = require("express");
const app = express();

const port = 8080;

app.get('/', (req, res) => {

    res.send("hello world");
})

 app.get('/hariom', (req, res) => {

    res.send([
        {
            name: "hariom",
            age: 20,
            height: 5.8
        },
        {
            name: "amratansh",
            age: 19,
            height: 5.7
        },
        {
            name: "ritansh",
            age: 20,
            height: 5.75
        }
    ])
})

app.get('/family',(req,res)=>{

    res.send([

        "papaji",
        "mammi",
        "shreesha chiraiya",
        "gaurisha gataiur"
    ])
})

app.listen(port, () => {

    console.log("server is listening to the port", port);
})