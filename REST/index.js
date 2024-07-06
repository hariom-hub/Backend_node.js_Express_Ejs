const express = require("express");
const app = express();
const port = 2020;
const path = require("path");

app.set("views engine");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let posts = [
    {
        username: "hariom",
        id: "h1",
        age: 20,
        height: 5.75,
        profession: "B.TECH CSE student",
        content: "Hey! I am hariom and I found great joy in coding ."
    },
    {
        username: "ritansh",
        id: "r1",
        age: 20,
        height: 5.7,
        profession: "B.TECH CSE(AI & DS) student",
        content: "Hey! I am ritansh and I love to code in python."
    },
    {

        username: "ayush",
        id: "a1",
        age: 20,
        height: 5.7,
        profession: "B.SC (PCM) student",
        content: "hey! I am ayush and I feel great pleasure in grinding my upsc preparation."
    }
];


app.get('/', (req, res) => {

    res.send("You are in the root path 🤬bhosideke");
});

app.get('/posts', (req, res) => {

    res.render("index.ejs", { posts });
});

app.get('/post/new', (req, res) => {

    res.render("form.ejs")
})

app.post('/post', (req, res) => {

    console.log(req.body);
    let { username, content } = req.body;
    posts.push({ username, content });
    // res.send("post request working");
    res.redirect('/posts');

});


app.get('/posts/:id',(req,res)=>{

    let {id} = req.params;
    console.log(`${id}`);

    let findPost = posts.find((p)=>id == p.id);
    if(findPost){
        console.log(findPost);
        res.render("search.ejs",{findPost});
    }else{
        res.sendStatus(404);
    }
   

})


app.listen(port, () => {

    console.log("server is listening to the port : ", port);
})

