let name = "hh";
let age = 2;
let person = {
    name: "abc",
    age: 3
};
console.log(person);
console.log(typeof person);
person.age = 32;
console.log(person);
let target = 'name';
person[target] = "hhh";

console.log(person);

let array = ['a', 2];
array[3] = 'c';
console.log(array);
console.log(typeof array[2]);
console.log(array.length);

function test(input) {
    console.log('a test of function! ' + input);
    return 2;
}

test();
console.log('output is : ', test());


function numbers(input) {
    return input * input ;    
}

// function numbers(input, input2) {
//     return input + input2 ;    
// }

console.log(numbers(2));
console.log(numbers(2,3));
const lineD = function() {
    console.log('-----------------------------------------');
    }
    

lineD();
// factory function
function factoryF(radius) {
    return {
        radius,
        draw : function() {
            console.log(radius* Math.PI);
        }
    };
    
}

const circle = factoryF(2);

console.log(circle.radius);
console.log(circle.draw());
circle.draw();



lineD();

//constructor function
function constructorF(radius) {
    this.radius = radius,
    this.draw = function(){
        console.log(this.radius*Math.PI);
    };
}

const circleC = new constructorF(3);

console.log(circleC.radius);
console.log(circleC.draw);
circleC.draw();

lineD();

const circleF = new Function('radius',`
this.radius = radius,
this.draw = function(){
    console.log(this.radius*Math.PI);
};`);

const testCircle = new circleF(3);
testCircle.draw();

lineD();

constructorF.call({},1);

lineD();

let x = 6;
let y = x;
x = 7 ;
 console.log('y is : ', y);

 lineD();

 let x_ = {value: 6};
 let y_ = x_;
 x_.value = 10;
 console.log('y is : ', y_.value);

 lineD();

 let nTest = 11;
 function increaseN(nTest) {
     nTest++;
 }

 increaseN(nTest); 
 console.log(nTest);

 lineD();

 let nTest2 = {value : 11};
 function increaseN2(nTest2){
     nTest2.value++;
 }
 increaseN2(nTest2);

console.log(nTest2);

lineD();

//add property in constructor function

// constructorF.location = 4; 

constructorF['location'] = 4;

//delete property

delete constructorF['location'];

for(let key in circleC ){
    if (typeof circleC[key] !== 'function') {
        console.log(key,circleC[key]);
    }
}

const key = Object.keys(circleC);
console.log(key);

if ('radius' in circleC) {
    console.log('circleC has radius');
}

lineD();

function GetSetFunction(radius) {

    let defaultLocation = {x: 0, y: 0};
    this.radius = radius,
    this.draw = function(){
        console.log(this.radius*Math.PI);
        console.log(defaultLocation);
    };
    Object.defineProperty(this, 'getLoctaion',{
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y) 
                throw new Error();
            defaultLocation = value;
            
        }

    });
}
const testGetSet = new GetSetFunction(20);
let value = {x:10, y:10};
testGetSet.getLocation = value;

testGetSet.draw();
console.log(testGetSet.getLocation);
// testGetSet.getLocation.set({X: 10, Y:10});


lineD();

function Stopwacth() {

    //private variables
    let startTime;
    let endTime;
    let duration = 0;
    let running;

    this.start = function(){
        if (running) 
            throw new Error("watch is already started");
        running = true;
        startTime = new Date();
        // startTime = new Date.now;
        
    };
    this.end = function(){
        if (!running) 
            throw new Error("watch is not even started");
        running = false;
        endTime = new Date();
        const secs =(endTime.getTime() - startTime.getTime())/1000;
        duration += secs;    
    
    };
    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() { return duration;}
    });
    
    // Object.defineProperty(this, 'duration', 
    //     get => function(){ return duration;}
    // );


}

let str1 = 'Hao'; 
let sentence = `hello, my name is ${str1}`;
console.log(typeof sentence);


lineD();

//string primitve 
const str2 = 'this is a message';
console.log(str2.length);
//String object
const strObj = new String('this is another message');
console.log(strObj.length);


// let vs const vs var
function testf() {
    for (let index = 0; index < 5; index++) {
        var color = 'red';  
        console.log(color);

    }
    lineD();
    console.log(color);
}

testf();

lineD();

const obj1 = {
    x:1,
    y:2
};

// const cloneObj = {} //init an obj
// for(let key in obj1)
// //copy
//     cloneObj[key]  = obj1[key];

// const cloneObj = Object.assign({},obj1);
// const cloneObj = Object.assign({color: 'red'},obj1);
const cloneObj ={...obj1};

console.log(cloneObj);


lineD();

//template literals
//Template ``
const myname = 'hao';
// myname = 'hoa';
const antherConst = `this is 
'first' message`;

console.log(antherConst);

lineD();

//array filter 
const numbers_ = [1,2,3,4,5];

// console.log(numbers_.filter(function(value){
// return value > 3;
// }));

console.log(numbers_.filter(item => item > 3
    ));

lineD();

//array map

const filter = numbers_.filter(item => item < 4);

console.log(`type of ${filter} is ${typeof filter}`);

console.log(numbers_.map(item => `<h1> item </h1>`));

//map object 
// const test_map = filter.map(n => {return {value : n}});
// const test_map = filter.map(n => {value : n}); // each is string
const test_map = filter.map(n => ({value : n})); // 

console.log(test_map);
lineD();
// differen of in and of 
for (let eachitem in test_map){
    console.log(test_map[eachitem].value); // eachtime return index
    console.log(typeof eachitem);
}

lineD();

for (let eachitem of test_map){
    console.log(eachitem.value);
    console.log(typeof eachitem);
}

lineD();
//array reduce
let sum1 = 0;
for (const n of numbers_) {
    sum1 += n;
}

console.log(sum1); //return 15

let sum2 = numbers_.reduce((a,c) => {
    return a +c ;
},1); //2 is the initial value of a , c is each of number 
//so it return 15 + 1
//2 is not set, a is default as 0


console.log(sum2);
numbers_.push('6');
console.log(numbers_);
