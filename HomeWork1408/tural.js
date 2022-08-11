//Task-2
const myarr = [2, 4, 6, 8, 0];
const myarr2 = [];


const myFunction = function (arr, arr2, index) {
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            i++;
        }
        arr2.push(arr[i]);
    }
    console.log(arr2);
}

const result = myFunction(myarr, myarr2, 3);


//Task-1

const myarrr = [1, 3, 5, 7, 9];
const myarrr2 = [];


const myFunction1 = function (arr, arr2, index, value) {
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            arr2.push(value)
        }
        arr2.push(arr[i]);
    }
    console.log(arr2);
}

const result1 = myFunction1(myarrr, myarrr2, 2, "SALAM");