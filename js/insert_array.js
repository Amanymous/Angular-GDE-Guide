// function insertElement(){

// let data =[60,30,10,67,40];
// let newEl= -1;
// let position=2;
// // console.warn(data)

// for(let i=data.length-1;i>0;i--){
//     // console.warn(data[i])
//     if(i>=position)
//     {

//         data[i+1]=data[i];
//         data[i] = newEl
//         // if(i==position)
//         // {
//         //     data[i]=newEl;
//         // }
//     }
// }
// console.warn(data)
// }
// data.splice(replace indexe,delete item, new item)

function insertEl() {
  let data = [60, 30, 10, 67, 40];
  let newEl = document.getElementById("newEl").value;
  newEl = parseInt(newEl);
  let position = document.getElementById("position").value;
  console.warn(data);

  for (let i = data.length - 1; i >= 0; i--) {
    // console.warn(data[i])
    if (i >= position) {
      data[i + 1] = data[i];
      if (i == position) {
        data[i] = newEl;
      }
    }
  }
  console.warn(data);
}
// console.log("APP:", insertEl());

// console.log("res:",insertElement());

// let array = [1, 2, 3, 4];
// let elementToInsert = 5;
// let indexToInsertAt = 2;

// for (let i = array.length - 1; i >= indexToInsertAt; i--) {
//   array[i + 1] = array[i];
// }
// array[indexToInsertAt] = elementToInsert;

// console.log(array);

// function insertElementWithLoop(arr, index, element) {
//   const newArray = [];

//   // Iterate through the original array
//   for (let i = 0; i < arr.length; i++) {
//     if (i === index) {
//       // Insert the element at the specified index
//       newArray.push(element);
//     }

//     // Copy the current element from the original array
//     newArray.push(arr[i]);
//   }

//   // If the index is at the end, add the element to the new array
//   if (index >= arr.length) {
//     newArray.push(element);
//   }

//   return newArray;
// }

// // Example usage:
// const myArray = [1, 2, 4, 5];
// const indexToInsert = 2;
// const elementToInsert = 3;

// const newArray = insertElementWithLoop(myArray, indexToInsert, elementToInsert);

// console.log(newArray); // Output: [1, 2, 3, 4, 5]
