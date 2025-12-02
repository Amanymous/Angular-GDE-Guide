const languages = ['Javascript', "Python", 'C']
// languages.pop()
// languages.shift()
// languages.unshift()
// languages.push('java')
// console.log(languages);

const actors = [
    {
        name: "Actor 1",
        payment: 100
    },
    {
        name: "Actor 2",
        payment: 200
    },
    {
        name: "Actor 3",
        payment: 300
    }
]
// for(let i= 0; i< actors.length; i++){
//     actors[i].payment--
//     console.log(actors[i]);

// }

// const for_each = actors.forEach((a)=>{
//     a.payment-= 10
// })

// for(const arr of actors){
//     arr.payment-=10
//     let res = arr.payment
//     console.log("res=",res);
// }
// console.log("res:",actors);

// const mapped = actors.map((a)=>{
//     return a.payment-=100
// })
// console.log("mapped:",mapped);

// const reduced = actors.reduce((a)=>{
//     return a.payment-=10
// })
// console.log("reduced:",reduced);

const student = [
    {
        fname: "student 1",
        lname: "khan",
        marks: 100
    },
    {
        fname: "student 2",
        lname: "khan",
        marks: 200
    },
    {
        fname: "student 1",
        lname: "khan",
        marks: 300
    }
]
let arr = [1,2,3,4,5,6,7,8,9]

// function isEven(arr){
//     return !(arr%2)
// }

// function orr(a,b){
//     return a || b
// }

// function constainEven(arr){
//     return arr.map(isEven).reduce(orr)
// }
// console.log(constainEven(arr))
// const filtered = student.filter((a)=>{
//     return a.marks > 200
// })

// const filterName = student.reduce((acc,a)=>{
//     acc += a.marks
//     return acc
// },0)
// console.log(filterName);

const admin = [1, 2, 3, 4]
// const user = {
//     name: "Aman",
//     id: 4
// }
// const isAdmin = admin.indexOf(user.id) > -1
// console.log(admin.includes(user.id));

// find

// const user = [
//     {
//         name: "Aman",
//         id: 1
//     },
//     {
//         name: "Aman1",
//         id: 2
//     },
//     {
//         name: "Aman2",
//         id: 3
//     }

// ]

// const res = user.find((u)=>{
//     return u.id === 1 ? true : false
// })
// console.log(res);

// const name = "aman"
// const n = name.split('')
// const newName = name.split('').map(l=>`${l}${l}`).join('')
// console.log(newName);

// const names = [
//     { name:"aman", likes:"Programming" },
//     { name:"imran", likes:"car" },
//     { name:"rehan", likes:"travelling" },
// ]

// const nameByLikes = names.map(item=>{
//     const container = {}
//     container[item.name] = item.likes
//     container.noOfLettersInName = item.name.length
//     return container
// })

// const nameByLikes = names.map((item)=>({
//     [item.name]: item.likes,
//     noOfLettersInName: item.name.length
// }))
// console.log(nameByLikes);

const players = [
    { name: "Andy", score: 10 },
    { name: "Bob", score: 20 },
    { name: "Charlie", score: 30 },
]

const reformattedArray = players.map((player)=>({
    [player.name]: player.score
}))

const reformattedArray1 = players.map(({name,score})=>({
    name: score
}))

console.log("1:",reformattedArray,"2:",reformattedArray1);

/**
 * @Array_Traversing_And_Accessing
 * 
 */

// let data = [9,45,2,8,45,23,7,78,0,11,41,77]
// for(let i = 0; i<data.length; i++){
//     console.log(`Array ${i}`,data[i]);
// }
console.log("aman");
function getElement(){
    let el = 41
    // let el = document.getElementById('element').value
    if(el<arr.length || typeof parseInt(el) === Number(el)){
        console.log(arr[el]);
        alert("Number is:"+ arr[el])
    }else{
        alert("Please ente ra valid value:"+ arr[el])
    }
}
console.log(getElement());