function deletePosition(){
    let arr = [10,20,30,40,50]
    let position = document.getElementById('position').value
    position = parseInt(position)
    for(let i=position; i<=arr.length-1; i++){
        // console.log(arr[i+1]);
        arr[i] = arr[i+1]

    }
    arr.length = arr.length - 1
    console.log(arr);
    // return arr
}
// console.log("res=",deletePosition());





let num = [1,2,3,4,5]

function app(arr,ind,n){
    for(let i = 0; i<=arr.length; i++){
        if(arr[i] == ind){
            console.log("ind",ind)
            arr[i] = n
            n= arr[i]
            console.log("arr=",arr[i])
        }
        // console.log(arr[i])
        return {n,arr}
    }
    return arr
}
console.log(app(num,2,9.2))