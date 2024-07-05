const express = require("express");
const app = express();


const port = 1010;

//if express is receiving an urlencoded data then it will automatically understand the format of that data by writing the below line
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(port, () => {

    console.log("server is listening to the port : ", port);
})

app.post('/register', (req, res) => {

    let {username,password} = req.body;

    console.log(req.body);
    res.send(`standard POST response for the user ${username}`)


})

app.get('/register', (req, res) => {

    let { user, password } = req.query;
    res.send(`standard GET response for the user ${user}`);
})

