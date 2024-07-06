const express = require("express");
const app = express();
const port = 2020;
const path = require("path");

app.set("views engine");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let posts = [
    {
        name: "hariom",
        age: 20,
        height: 5.75,
        profession: "B.TECH CSE student"
    },
    {
        name: "ritansh",
        age: 20,
        height: 5.7,
        profession: "B.TECH CSE(AI & DS) student"
    },
    {

        name: "ayush",
        age: 20,
        height: 5.7,
        profession: "B.SC (PCM) student"
    }
];


app.get('/', (req, res) => {

    res.send("You are in the root path 🤬bhosideke");
});

app.get('/posts', (req, res) => {

    res.render("index.ejs", { posts });
});


app.listen(port, () => {

    console.log("server is listening to the port : ", port);
})

