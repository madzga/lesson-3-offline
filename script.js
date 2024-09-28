"use strict"

//1
 let  fnc1 = function (a,b,s,d,e,f,g,h,i){
    return a+b+s+d+e+f+g+h+i
}
console.log (fnc1(10, 50, 6, 7, 8, 11, 6, 3, 9)   )


//2
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
if (isloggedin = true ) 
    return firstname + lastname

        console.log (firstname)
        
//3

let arr=[10,30,50,44,160,200]
    
function findMax(array) {
    let maxNum = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (maxNum < array[i]) {
        maxNum = array[i];
      }
    }
    return maxNum;
  }
  
  console.log(findMax(arr));
//5

let array1 = [1, 2, 3,4,5];

function reverseArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}
reverseArray(array1);


//6


let checkAge = (dateOfBirth, CurrYear) => CurrYear - dateOfBirth;

console.log(checkAge(2004, 2024));

//7
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let item of array2) {
    if (item ===5){
        break;
    }
    console.log(item)
}

//8
let array5 = [1, 2, 3, 7, 6, 9]
for (let item of array5) {
    if(item ===7){
        continue;
    }
    console.log(item)
}