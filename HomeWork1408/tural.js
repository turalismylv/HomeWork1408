// Task-2
const myArr = [2, 4, 6, 8, 0];


const myFunction = function (arr, index) {
    const myNewArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            i++;
        }
        myNewArr.push(arr[i]);
    }
    if(index>arr.length-1){
        console.log("Bu indexde silmek ucun element yoxdur");
    }
    if(index===arr.length-1){
        myNewArr.pop();
    }
    return myNewArr;
}
const result = myFunction(myArr, 5);

console.log(result);

// Task-1

const myArr1 = [1, 3, 5, 7, 9];


const myFunction1 = function (arr, index, value) {
    const myNewArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            myNewArr.push(value)
        }
        myNewArr.push(arr[i]);
    }
    if (index > arr.length-1) {
        myNewArr.length=myNewArr.length+index;
        myNewArr.push(value)
    }
    return myNewArr;
}
const result1 = myFunction1(myArr1, 7, `Salam Aleykum Brat`);

console.log(result1);