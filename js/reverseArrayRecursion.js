let data = [-1, 12, 65, 89, 0, 100, 200];
let temp;
function customReverse(data, start, end) {
    console.warn(data)
    if (start <= end) {
        temp = data[start];
        console.log("temp=",temp);
        data[start] = data[end];
        data[end] = temp;
        console.log("data[end]",data[end]);
        return customReverse(data, start + 1, end - 1);
    }


}

customReverse(data, 0, data.length - 1);