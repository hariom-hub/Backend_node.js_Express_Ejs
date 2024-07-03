const figlet = require("figlet");

figlet("Keep going hariom 🔥🔥🔥🔥", function (err, data) {

    if (err) {
        console.log(err);
        console.log("some error found");
        return;
    }
    console.log(data);

});