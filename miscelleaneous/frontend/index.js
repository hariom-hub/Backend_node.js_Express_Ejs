// const arr = [1, 2, 3, 4];



// arr.sayhello = () => {
//     console.log("hello world");
// }

// arr.sayhello();

// console.log(arr.__proto__);


// function personTalk(name, age) {

//     const person = {

//         name: name,
//         age: age,
//         talk() {
//             console.log(`HI my name is ${this.name}`);
//         }
//     }
//     return person;
// }

// let p1 = personTalk("hariom",20);
// let p2 = personTalk("Goal",100);

// p1.talk();
// p2.talk();


// function person(name,age){

//     this.name = name;
//     this.age = age;

// }

// person.prototype.talk = function(){
    
//     console.log(`your name is ${this.name} and age is ${this.age}`);

// }

// let p1 = new person("hariom",20);
// let p2 = new person("microsoft",60);

// p1.talk();
// p2.talk();


class Student{

    constructor(name,age,height){

        this.name = name;
        this.age = age;
        this.height = height;
    }
    todo = function(){
        console.log(`your name is ${this.name}`);
        console.log(`your age is ${this.age}`);
        console.log(`your height is ${this.height}`);
    }
}

let info1 = new Student("hariom",20,5.8);
info1.todo();
// let info2 = new Student("gaurisha",19,5.6);
// info2.todo();
// let info3 = new Student("shreesha",23,5.4);


class Teacher extends Student{

    constructor(name,age,height,degree){

        super(name,age,height,degree);
        this.name = name;
        this.age = age;
        this.height = height;
        this.degree = degree;
    }
    todo = function(){
        console.log(`your name is ${this.name}`);
        console.log(`your age is ${this.age}`);
        console.log(`your height is ${this.height}`);
        console.log(`your qualification is ${this.degree}`);
    }
}

let teach = new Teacher("nauua",50,5.6,"bsc");
teach.todo();