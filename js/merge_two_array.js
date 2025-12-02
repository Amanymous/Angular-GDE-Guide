// function mergeTwoArray(){
//     let arr1 = [60, 30, 10, 67, 40];
//     let arr2 = [120,450,85,23,99]
//     let arr3 = []
//     for(let i=0; i<arr1.length; i++){
//         arr3[i] = arr1[i]
//     }
//     for(i=0; i<arr2.length; i++){
//         arr3[arr1.length+i] = arr2[i]
//     }
//     console.log(arr3);
// }
// console.log(mergeTwoArray());

// let arr1 = [60, 30, 10, 67, 40];
// let arr2 = [120,450,85,23,99]
// let arr3 = [...arr1,...arr2]
// console.log(arr3);

// Merge two array using while loop

let arr1 = [3,7,12,34,56,90]
let arr2 = [4,9,25,45]
let arr3 = []
let d1 = 0
let d2 = 0
let d3 = 0
while(d1<arr1.length && d2<arr2.length){
    if(arr1[d1]<arr2[d2]){
        arr3[d3] = arr1[d1]
        d1++
    }
    else{
        arr3[d3] = arr2[d2]
        d2++
    }
    d3++
}
while(d1<arr1.length){
    arr3[d3] = arr1[d1]
    d1++
    d3++
}
console.log(arr3);
