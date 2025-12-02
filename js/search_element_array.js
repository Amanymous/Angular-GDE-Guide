function search(){
    let data = [10,20,30,40,50]
    let searchIndex = document.getElementById('position').value
    searchIndex = parseInt(searchIndex)
    for(let i = 0; i<=data.length; i++){
        if(data[i] == searchIndex){
            console.log(searchIndex);
            searchIndex = i
        }
    }
    console.log("search =",searchIndex); 
}
console.log("search:",search());

// let data = [10,20,30,40,50]
// let res = data.findIndex((a)=>{
//     return a == 20
// })
// console.log("res:",res);