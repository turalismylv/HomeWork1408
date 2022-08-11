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
