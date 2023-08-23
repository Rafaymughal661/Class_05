// Q1:  Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
var array1:string[]=["RAFAY", "ALI", "AHMAD", "ARSLAN", "ABU-BAKAR"];
let index:number = 3;
let parameter:string = "Azhar";

function insertion(array1:string[], index:number, parameter:string) {
    array1.splice(3,1,parameter)

    return array1
}
var res = insertion(["RAFAY", "ALI", "AHMAD", "ARSLAN", "ABU-BAKAR"],3,"Azhar");
console.log(res);

// Q2: Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

var myCart:string[] = ["Peach"];

function addItem() {
    myCart.splice(1,0,"Apple")
    console.log(myCart);
}
addItem();

function removeItem(){
    myCart.splice(0,1,);
    console.log(myCart);
}
removeItem();

function updateQuantities() {
    myCart.splice(1,0,"Peach","Banana","Grapes");
    console.log(myCart);
}
updateQuantities();

// Q:  Write a program that uses a while loop to print the first 25 integers.

let index1:number = 1;
while (index1 <= 25) {
    console.log(index1);

    index1 = index1 + 1;
}

// Q: Write a program that uses a while loop to print the first 10 even numbers.

let val:number = 1;
while (val <= 10) {    
    let result:number = 2*val;
    console.log(result);
    val = val +1;
}

// Q: Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
 function calc(num6:number) {
    var result1 = 1;
    while (num6>1) {
        result1 *= num6;
        num6--
    }
    return result1;
}
var calclus = calc(5);
console.log(calclus);

// Q: Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

 function removal(array:number[]):number[] {
     return array.filter(num => num >= 0);
}

var Originalarray:number[]=[0,-5, -6, -8, 9, 10 ];
var modifiedarray:number[]=removal(Originalarray);

console.log("Original array", Originalarray );
console.log("modified array", modifiedarray);


//Q:  Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.


function calculateArraySum(numbers: number[]): number {
    let sum = 0;
    let index = 0;
    
    while (index < numbers.length) {
        sum += numbers[index];
        index++;
    }
    
    return sum;
}

const myArray = [3, 7, 2, 8, 5];
const sum = calculateArraySum(myArray);

console.log("Sum of Array:", sum);

// Q: Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
var temp:number[]=[36,29,35,31,38];
var i:number=0
var TempCtoF:number[]=[];
while(i<temp.length){
    TempCtoF[i]= (temp[i] * 9/5) + 32;
    i++
}
console.log(TempCtoF);

