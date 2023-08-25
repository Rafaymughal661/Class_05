 // Q: Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function calculateSumofEven(num:number){ 
    var sum = 0;
    for (let index = 1; index<=num; index++){
       sum += index * 2;
    }
    return sum
}
var res = calculateSumofEven(8);
console.log("the sum of first 8 even numbers is =", res);


// Q: Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let myArray:number[]=[20, 17, 16, 15, 14, 22, 12, 10];
for(let index:number = 0; index<myArray.length; index++){
if (myArray[index]%2==0) {
   console.log(myArray[index]);
}
}

// Q: Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let array2:number[]=[20, 17, 16, 15, 14, 22, 12, 10];
for (let index = 0; index < array2.length; index++) {
    if (array2[index] % 2 != 0) {
        console.log(array2[index]);
    }
    
}

// Q: Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
// Formula =  π * r²

function calculatearea(radius:number) {
    return pi * radius ** 2;
}
var pi:number = 3.14;
var res = calculatearea(11);
console.log(res);

// Q:  Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

let grades:number[] = [30,45,49,52,60,90,80];
for (let index = 0; index < grades.length; ) {
    if (grades[index] < 50 ) {
        grades.splice(index,1);
        index++
    }
} 
console.log(grades);

// Write a program that uses a function to find the largest element in an array of numbers.
let largest = 0; 
function largestnum(arrayOfnum:number[]){
    for (let index = 0; index < arrayOfnum.length; index++) {
         largest = Math.max(arrayOfnum[index])
        
    }
    return largest
}
var output = largestnum([5,10,15,20,25,30,35,50,60]);
console.log(output);