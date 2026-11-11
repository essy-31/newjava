// for (var a = 1; a <= 10; a++) {
//     document.write(a + "<br>");
// }
// for  (var a = 10; a>=1; a--){
//     document.write (a +"<br>")
// }
// for (var a = 2; a <= 50; a += 2) {
//     document.write(a + "<br>");
// }
// for (var a = 1; a <= 50; a += 2) {
//     document.write(a + "<br>");
// }
// var result = 0;

// for (var a = 1; a <= 100; a++) {
//     result = result + a;
// }

// document.write(result);
// var result = 0;

// for (var a = 2; a <= 100; a += 2) {
//     result = result + a;
// }

// document.write(result);
// var result = 0;

// for (var a = 1; a <= 100; a += 2) {
//     result = result + a;
// }

// document.write(result);
// 
// var result = 1;

// for (var a = 1; a <= 6; a++) {
//     result = result * a;
// }

// document.write(result);
// var count = 0;

// for (var a = 1; a <= 100; a++) {
//     if (a % 3 == 0) {
//         count++;
//     }
// }

// document.write(count);
// 
// 
// 
// var result = 0;

// for (var a = 1; a <= 10; a++) {
//     result = result + (a * a);
// }

// document.write(result);
// var result = 0;

// for (var a = 1; a <= 5; a++) {
//     result = result + (a * a * a);
// }

// document.write(result);
// for (var a = 1; a <= 100; a++) {
//     if (a % 3 == 0 && a % 5 == 0) {
//         document.write(a + "<br>");
//     }
// }
// var num = 7;
// var count = 0;

// for (var i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         count++;
//     }
// }

// if (count == 2) {
//     document.write("Prime Number");
// } else {
//     document.write("Not a Prime Number");
// }
// for (var num = 2; num <= 50; num++) {
//     var count = 0;

//     for (var i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             count++;
//         }
//     }

//     if (count == 2) {
//         document.write(num + "<br>");
//     }
// }
// var n = 17;
// var a = 0;
// var b = 1;
// var next;

// for (var i = 1; i <= n; i++) {
//     document.write(a + "<br>");

//     next = a + b;
//     a = b;
//     b = next;
// }
// for (var a = 1; a <= 100; a++) {
//     if (a % 7 == 0) {
//         document.write(a + "<br>");
//     }
// }

// var num = 7;

// if (num % 2 == 0) {
//     document.write("Even Number");
// } else {
//     document.write("Odd Number");
// }

// var str = "hello";
// var reverse = "";

// for (var i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
// }

// document.write(reverse);

// var str = "madam";
// var reverse = "";

// for (var i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
// }

// if (str == reverse) {
//     document.write("Palindrome");
// } else {
//     document.write("Not a Palindrome");
// }

var num = 121;
var original = num;
var reverse = 0;

while (num > 0) {
    var digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

if (original == reverse) {
    console.log("Palindrome Number");
} else {
    console.log("Not a Palindrome Number");
}

// var num = 153;
// var original = num;
// var count = num.toString().length;
// var sum = 0;

// while (num > 0) {
//     var digit = num % 10;
//     sum = sum + Math.pow(digit, count);
//     num = Math.floor(num / 10);
// }

// if (sum == original) {
//     document.write("Armstrong Number");
// } else {
//     document.write("Not an Armstrong Number");

// }

// FUNCTION

// function greetings(name){
//           document.write("Good Morning" + name);
  
// }
// greetings("John");

// function sum(n1,n2){
//           return(n1+n2);
  
// }
// var result= sum(1.7,20);
// document.write(result);


// ARRAY

// var animal =["Elepahant", "Lion", "Tiger"];
// document.write(animal[2]);
// var animal =["Elepahant", "Lion", "Tiger"];
// animal[1]= "Monkey"
// document.write(animal);
// var animal =["Elepahant", "Lion", "Tiger"];
// var x= animal.length;
// document.write(x);
// var animal =["Elepahant", "Lion", "Tiger"];
// var x= animal.length;
// for (var i=0;i<x; i++){
// document.write (animal[i]);
// }


// STRING

// var text ="Javascript";
// document.write (text.charAt(2));
// var text ="Javascript";
// var text1 ="Learn";
// document.write (text1.concat(text));
// var text ="JAVASCRIPT";
// document.write (text.toLowerCase());
// var text ="javascript";
// document.write (text.toUpperCase());
// var text ="learn java script";
// document.write (text.slice(6,10));


// MATH OBJECT

// var a=9;
// document.write(Math.sqrt(a));

// var a= -9;
// document.write(Math.abs(a));

// document.write(Math.min(7, 2, 6, 3, 1));

// document.write(Math.max(7, 2, 6, 3, 1));

// document.write(Math.pow(7, 2));
// document.write(Math.pow(7, 3));

// document.write(Math.floor(7.123));

// document.write(Math.ceil(7.123));

// document.write(Math.round(7.123));

// document.write(Math.random());

// var a=Math.random();
// var rounded=a*10;
// document.write(rounded);

// var a=Math.random();
// var rounded= Math.floor(a*10);
// document.write(rounded);

// DOM (Document Object Model)
// Application Programing interface(API) for HTML and XML documents.
// HTML DOM is the object oriented representation of a webpage.
// When webpage is loaded, browser creates the HTML DOM of the page.
// Represent all HTML elements as objects.

// 1.getElementById

// var a= document.getElementById("head1");
// a.innerHTML  = "learn Javascript";

// var a= document.getElementById("head1");
// a.style.color="blue";

// // 2.getElementsByClass
// var a= document.getElementsByClassName("head1");
// // a[0].innerHTML="GOOD MORNING";
// a[0].style.color="blue";

// 3.getElementsByTagName
// var a= document.getElementsByTagName("h1");
// console.log(a);

// var a= document.getElementsByTagName("p");
// a[0].innerHTML="Changed Paragraph";

// var a= document.getElementsByTagName("p");
// // a[1].innerHTML="Changed Paragraph";
// a[1].style.color="red";

// // 4.getElementsByName
// var a= document.getElementsByName("text")[0];
// var b=document.getElementById("head");

// function message(){
//     b.innerHTML= "Hello" + a.value;
// }

// 4.getElementsByCSSSelector( Query selector all)
// var a= document.querySelectorAll("h1");
// console.log(a);

// var a= document.querySelectorAll("h1");
// a[0].innerHTML= "Learn HTML";
// a[1].style.color="red";

// var a= document.querySelectorAll(".hclass");
//  console.log(a);

// var a= document.querySelectorAll(".hclass");
// a[1].innerHTML= "Learn HTML";
// a[1].style.color="red";

// var a= document.querySelectorAll("#head1");
//  console.log(a);
// var a= document.querySelector("#head1");
// a.innerHTML= "Learn HTML";


// CREATE & REMOVE ELEMENTS DOM

// var heading= document.createElement("h1");
// function create(){
//     heading.innerHTML="Hello World";
//     document.body.appendChild(heading);
// }
// function remove(){
//     heading.remove();
    
// }

// var heading= document.getElementById("head");
// var btn= document.getElementById("btn");
// btn.addEventListener("click", changeColor );
// heading.addEventListener("mouseover", changeBG);
// function changeColor(){
//     heading.style.color="red";
// }
// function changeBG(){
//     heading.style.color="blue";
// }

// var button = document.getElementById("btn");

// button.addEventListener("click", function() {
//     alert("Button Clicked!");
// });

// OBJECT ORIENTED PROGRAMMING
// Let employee={
//     name : "John",
//     position: "Accountant",
//     salary: "30000",
//     get  salary(){
//         document.write ("Salary of" + this.name+ "is" + this.salary);
//     }
// }
// console.log(employee);
// const name="sneha";
// const age=24;

// console.log(`my name is ${name} and im ${age} years old`)

// const user = {name:"sneha",age:24,role:"developer"}
// const {name,age,role} = user
// console.log(name)
// console.log(age)
// console.log(role)

// let a=[1,2,3,8,9,5];
// let[b,c,d,e,f]= a;
// console.log(b);

// console.log(f);
// console.log(d);
// console.log(c);

// const isEven = (number) => { return number%2===0}
// console.log(isEven(16))

// const numbers = [10, 20, 30, 40, 50];
// const double = numbers.map((num)=>{return num*2})
// console.log(double)