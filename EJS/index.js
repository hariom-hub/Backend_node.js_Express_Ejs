const express = require("express");
const app = express();
const port = 5050;
const path = require("path");

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {

    console.log("server is listening to the port", port);
})

app.get('/', (req, res) => {

    res.send("You are on the root path.");
})

app.get('/html', (req, res) => {

    res.render("home.ejs");
})

app.get('/dice', (req, res) => {

    let number = Math.floor(Math.random() * 6) + 1;

    res.render("rollDice.ejs", { number });
})

//instagram templating

app.get('/ig/:username/:age', (req, res) => {

    let { username , age } = req.params;
    console.log({username,age});
    res.render("userInsta.ejs", { username ,age  });
})