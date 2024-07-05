const arr = [1, 2, 3, 4];

arr.sayhello = () => {
    console.log("hello world");
}

arr.sayhello();

console.log(arr.__proto__);