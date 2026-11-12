// function calculate(a,b,callback){
//     const result=a+b
//     callback (result);

// }
// function display(result){
//     console.log(`${result}`);
// }
// calculate(10,20,display)

// const numbers=[1,2,3];
// console.log(...numbers);

// function add(...numbers){
//     console.log(numbers);
// };
// add(10,20,30);

// let numbers=[1,2,3,4,5];
// let [a,b,...rest]=numbers;
// console.log(a);
// console.log(b);
// console.log(...rest);

// const promise =new Promise((resolve, reject)=>
//     {
//     let success=false;
//     if (success){
//         resolve("Data received successfully ");

//     }else{
//         reject("Something went wrong");
//     }
// });

// promise
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//        console.log("operation completed");
 
// });

// function getData(){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve("Data recieved");
//         },2000);
    
//     });
// }
// async function showData() {
//     const data=await getData();
//     console.log(data);    
// }
// showData();

// const user={
//     name:"Rahul",
//     age:25
// };
// const jsonData= JSON.stringify(user);
// console.log(jsonData);
// const jsonData=`{"name":"Rahul","age":25}`;
// const user= JSON.parse(jsonData);
// console.log(user);

// let ar1= [10,20,30];
// let ar2= [40,50,60];
// let ar3= ar1.concat(ar2);
// ar3.push(15);
// console.log(ar3);

// COPY
// let ar1= [10,20,30];
// let ar2= [40,50,60];
// let ar3=[...ar1]
// console.log(...ar1);

// REST & SPREAD
// const numbers = [10, 20, 30, 40];

// const copyArray = (arr) => {
//     return [...arr];
// };

// const result = copyArray(numbers);

// console.log(result);
// console.log(numbers);

// const arr1 = [1, 2, 3, 4, 5];

// const arr2 = [7, 8, 9, 6];

// const result = [...arr1, ...arr2];

// console.log(result);

// const numbers = [10, 20, 30];

// const newNumbers = [...numbers, 40];

// console.log(newNumbers);

const numbers = [10, 20, 30];

const newNum = [15, ...numbers];

console.log(newNum);





