
const express = require("express");
const app = express();
const port = 2020;

const path = require("path");
const { v4: uuidv4 } = require('uuid');

const methodOverride = require("method-override");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

let posts = [
    {
        username: "hariom",
        id: uuidv4(),
        age: 20,
        height: 5.75,
        profession: "B.TECH CSE student",
        content: "Hey! I am hariom and I found great joy in coding."
    },
    {
        username: "ritansh",
        id: uuidv4(),
        age: 20,
        height: 5.7,
        profession: "B.TECH CSE(AI & DS) student",
        content: "Hey! I am ritansh and I love to code in python."
    },
    {
        username: "ayush",
        id: uuidv4(),
        age: 20,
        height: 5.7,
        profession: "B.SC (PCM) student",
        content: "Hey! I am ayush and I feel great pleasure in grinding my UPSC preparation."
    }
];


//default route

app.get('/', (req, res) => {
    res.send("You are in the root path");
});


// main route where all the user profiles are visible

app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts });
});


//new router for adding a new user

app.get('/posts/new', (req, res) => {
    res.render("form.ejs")
});


//redirecting to the posts route after adding a new username

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("search.ejs", { post });

});

//pushing the new usernames with their contents in the posts route

app.post('/posts', (req, res) => {
    let id = uuidv4();
    let { username, content } = req.body;
    posts.push({ id, username, content });
    res.redirect('/posts');
});


// updating the content

app.patch("/posts/:uid", (req, res) => {
    let { uid } = req.params;
    // console.log(uid);


    let newContent = req.body.content;


    let post = posts.find((p) => uid == p.id);
    console.log("previous content");
    console.log(post.content);
    post.content = newContent;
    console.log("updated content");
    console.log(newContent);
    res.redirect('/posts');

    // if (post) {
    //     post.content = newContent;
    //     console.log(post);
    //     res.sendStatus(200);
    // } else {
    //     console.log("Post not found");
    //     res.status(404).send("Post not found");
    // }
});


app.get('/posts/:id/edit', (req, res) => {

    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
})

//DELETING CONTENT IN OUR PAGE


app.delete('/posts/:id', (req, res) => {

    let {id} = req.params;
    posts = posts.filter((p)=>id !== p.id);
    res.redirect('/posts');
})

//listening to the requsts using the virtual port

app.listen(port, () => {
    console.log("Server is listening on port:", port);
});

//the above line will filter those posts which are not equal to the id passed as a parameter and if  the id which matches the parameterized id will be,

//responsible for the deletion of that particular post.
