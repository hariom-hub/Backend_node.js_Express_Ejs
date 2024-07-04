# Backend_node.js_Express_Ejs
My backend journey..........
# let's start again 🔥🔥🔥🔥

Learnings from day 1 : 

executable path for node.js
# 'C:\\Program Files\\nodejs\\node.exe',

file path of our files in the directory
 #  'D:\\Backend_node.js_Express_Ejs\\script.js',

 <b>require()</b>
 <b>Module.exports()</b>

 # NPM - node package manager
 library of packages
 command line tool
 FIGLET
 node modules - contains a package of all the dependencies of our project.
 package-lock.json - contains the exact version of all the dependencies.
 <u>package.json</u> 

 # The <u>package.json</u> file contains descriptive and functional <u>metadata</u> about a project, such as a name, version and dependencies
 command - <u>npm init </u> command is used to initialize our own package
 npm i -g "package name " -  command is used to install a package globally
 npm link "package name " - command is used to link the current directory with the global directory to share the info inside packages from one place to another place.

 # Important note - If we are using import and export features in our project then we have to add a key:value pair named as [type:"module"] in the <u>SAME</u> directory.


Learnings from day : 2

 # EXPRESS.JS
 A node.js  web application framework that helps us to make web applications.
 It is used in server side programmming.

 Main features:
 1. Listen for the incoming requests.
 2. Parse (Node.js)
 3. Match response with routes. example - https:\\hariom.com\info
 4. Sending Suitable Response.

 
![request and response](1_CdUUublTxuAyIcnTFlxSUg.png)

* defining a port 
const port = 8080

* requiring express

const express = require("express");

* listening to requests using routes ('/')

app.get('/hello',(req,res)=>{

    res.send("hello world");
})

* Listening to the server using the port defined.

app.listen(port,()=>{

    console.log("server is running on the port",port);
})



