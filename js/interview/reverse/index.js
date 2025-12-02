function reverse(str){
    // solution 1
    // return str.split('').reverse().join('');
    // solution 2
    // let sum = '' | 0
    // for(let i = str.length-1; i>=0; i--){
    //     sum += str[i]
    // }
    // return sum
    // solution 3
    // let reversed = ''
    // for(let charcter of str){
    //     reversed = charcter + reversed
    //     console.log("reversed=",reversed,"charcter=",charcter);
    // }
    // return reversed
    // solution 4
    
    return str.split('').reduce((reversed,character,index)=>{
        console.log("reversed=",reversed,"charcter=",character);
        return character + reversed
    },'')
}
console.log(reverse('aman'));

module.exports = reverse