var myImage = document.querySelector('img');

myImage.onclick = function()
 {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.jpg') {
      myImage.setAttribute ('src','images/chromelogo.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-logo.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// // the above code can also be written as
// // document.querySelector('h1').textContent=function(){
//     // myHeading.textContent = 'Hello world!';}


// // var to declare variable
// // var myVarible. just like myHeading. end with semicolen(;)
// // variable names are case sensitive
// // myVariable='Bob';
// // var myVariable='Bob';
// // you can retrieve the value by just calling the variable by name
// // like myVariable
// // you can also change the value like: myVariable='Tanay'
// // array is an intersting data type. this structure allows you to store multiple values in a single reference 
// // like var myVariabel=[1,'Bob','tanay,10]
// // refer to each member of the array like this myVariable[0],myVariable[1],etc

// // operators include +,-,*,/,=,=== this means equality

// //the funny thing is if you upgrade your mac to like 512gb then the price jumps up by another 1 lakh, which is crazy!! Yes as crazy as usong 2 exclamation marks
// // functions are a way of packaging functionality that you wish to reuse
// // examples of functions include document.querySelector('h1); and alert('hello!);


// function multiply (num1,num2)
// {
//     var result=num1*num2;
//     return result;
// }

// document.querySelector('html').onclick=function()
// {
//     alert('Ouch!Stop poking me!')
// }