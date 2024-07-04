const express = require("express");
const app = express();
const port = 5050;
const path = require("path");



app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/public/jsfolder")))

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

    let number = Math.floor(Math.random() * 50) + 1;

    res.render("rollDice.ejs", { number });
})

// instagram templating

app.get('/ug/:username/:age', (req, res) => {

    let followers = Math.floor(Math.random()*120000)+1;

    let { username,age } = req.params;
    console.log({username,age});
    res.render("userInsta.ejs", { username ,age,followers});
})


//cats and dog api templating 



app.get('/ig/:username', (req, res) => {

    let { username } = req.params;
    const InstaJsonData = require("./data.json");
    const data = InstaJsonData[username];
    console.log(data);
    if (data) {
        res.render("instaPost.ejs", { data });
    } else {
        res.sendStatus(404);
    }




})