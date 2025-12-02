// function sortArray(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         console.log("outer loop:","i:",i,"arr[i]:",arr[i]);

//         for (let j = i + 1; j < arr.length; j++) {
//             console.log("Inner loop:","j:",j,"arr[j]:",arr[j]);

//             if (arr[j] <= arr[i]) {
//                 console.log("arr[j] <= arr[i]",arr[j] , arr[i]);
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp

//             }
//         }

//     }
// }
// let num = [3, 5, 2 ,- 2, 4, 1]
// console.log("Unsorted Array:",num);
// sortArray(num)
// console.log("Sorted Array:",num)

/**
 * @param {" Merge Sort "}
 * [3, 5, 2 ,- 2, 4, 1] mid = first + end = res / 2 = 0+5 = 5/2=2
 * [3, 5, 2]  0+2=2/2=1 , [-2,4,1] 3+5=8/2=4
 * [3,5] 0+1=1/2=0 [2] (2,2)  , [-2,4] [1]
 * [3] [5]              , [-2] [4]
 */
function sort(arr,start,mid,end){
    let temp = new Array(arr.length)
    let i = start, j = mid+1, k= start
    while(i<=mid && j<=end){
        if(arr[i] <= arr[j]){
            temp[k] = arr[i]
            i++
        } else{
            temp[k] = arr[j]
            j++
        }
        k++
    }
    if(i<=mid){
        while(i<=mid){
            temp[k] = arr[i]
            i++;k++
        }
    } else{
        while(j<=end){
            temp[k] = arr[j]
            j++;k++
        }
    }
    for(let index=start; index<=end; index++){
        arr[index] = temp[index]
    }
}
 
function divide(arr,start,end){
    if(start<end){
        let mid = parseInt((start+end)/2) // 2 index // 1 // 0
        divide(arr,start,mid) // 0,2 index // 0,1 // 0,0
        divide(arr,mid+1,end) // 3,5 index // 2,2 // 
        sort(arr,start,mid,end)
    }
}
function mergeSort(arr){
    divide(arr,0,arr.length-1)
}

let num = [3, 5, 2 ,- 2, 4, 1]
console.log("Unsorted Array:",num);
mergeSort(num)
console.log("Sorted Array:",num)


// first order salary in javascript
// const employees = [
//     {name: 'Ana', salary: null, bonus: 3000},
//     {name: 'Ana', salary: 80000, bonus: 3000},
//     {name: 'Ana', salary: 70000, bonus: 3000},
//     {name: 'Ana', salary: 70000, bonus: 1000}
// ];

// employees.sort((a, b) => {
//   return a.name.localeCompare(b.name) ||
//     safeNumCompare(a.salary, b.salary) ||
//     safeNumCompare(a.bonus, b.bonus);
// });

// console.log(employees);

// function safeNumCompare(a, b) {
//   const aValid = isValidNum(a), bValid = isValidNum(b);

//   if (!(aValid || bValid)) return 0;
//   if (!aValid) return 1;
//   if (!bValid) return -1;
//   return a - b;
// }

// function isValidNum(num) {
//   return typeof num === 'number' && !isNaN(num);
// }
