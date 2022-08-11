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
    console.log(myNewArr);
}
const result = myFunction(myArr, 3);


// Task-1

const myArr1 = [1, 3, 5, 7, 9];


const myFunction1 = function (arr, index, value) {
    const myNewArr=[];
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            myNewArr.push(value)
        }
        myNewArr.push(arr[i]);
    }
    console.log(myNewArr);
}
const result1=myFunction1(myArr1,2,`Salam Aleykum Brat`);