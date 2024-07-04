let greenbutton  = document.createElement('button');
let greybutton = document.createElement('button');

let body = document.querySelector("body");

body.prepend(greenbutton);
body.prepend(greybutton);

greenbutton.addEventListener('click',()=>{

    body.style.backgroundColor = "green";
});

greybutton.addEventListener('click',()=>{

    body.style.backgroundColor =  "grey";
})


greenbutton.innerText = "green";
greybutton.innerText = "grey ";