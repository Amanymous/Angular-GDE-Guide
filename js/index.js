// const letter = ()=>{

//     const phrase = 'My name is aman'
//     phrase.length
//     let res = 0
//     for(const letter of phrase){
//         console.log(letter,phrase.length);
//         // res = Number(letter)+1
        
//     }
//     return
// //    return { res }
// }
// console.log(letter());

// const max = (numbers)=>{
//     let result  = numbers[0]
//     console.log("res=",result);
//     for(let number of numbers){
//         if(number > result){
//             result = number
//         }
//     }
//     return {result}
// }
// console.log(max([10,2000,322,94,85]));

const letterFrequency = (letter) =>{
    let frequency = {}
    for(const letters of letter){
        console.log(letters);
        if(letters in frequency){
            // frequency[letters] = frequency[letters] + 1
            frequency[letters]++
            // frequency[letters] += 1
        }else{
            frequency[letters] = 1
        }
    }
    return frequency
}
// console.log(letterFrequency('hahal'));

const wordFrequency = (spell) =>{
    // let frequency = {}
    const words = spell.split(' ')
    return letterFrequency(words)
    // return frequency
    // console.log(words);
    // for(const word of words){
    //     if(word in frequency){
    //         frequency[word]++
    //     }else{
    //         frequency[word] = 1
    //     }
    // }
    // return frequency
}
// const userInput = prompt("this this is how it looks")
// console.log(wordFrequency(userInput));

const filter = (numbers,greaterThan)=>{
    const result = []
    for(const number of numbers){
        if(number > greaterThan){
            result.push(number)
        }
    }
    return result
}
console.log(filter([1,2,3,4,5,6,7,8,9,10],5));


// let num = [2,1,8,7,10,3]
// let len = num.length
// let maximum = 7
// let minimum = 2
// let i;
// for(i = 0; len> i; i++){
//     if(num[i]>maximum){
//         maximum = num[i]
        
//     }
//     if(num[i]<minimum){p
//         minimum = num[i]
//     }
// }

// console.log(maximum,minimum);

// function app(num1) {
    
//     return {
//           "inner": function(num2) {
//                 return num1+num2;
//           },
        
//     };
// }; 
// console.log(app(2).inner(4));