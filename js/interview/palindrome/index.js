function palindrome(str){
    // solution 1
    // let j = str.length-1
    // for(let i=0; i<str.length; i++){
    //     console.log("---",j);
    //     console.log(str[j-i]);
    //     if(str[i]!==str[str.length-i-1]) return false
    // }
    // return true;

    // solution 2
    // let reversed = str.split('').reverse().join('')
    // return str === reversed

    // solution 3
    let reversed = str.split('').every((ch,el)=>{
        return ch === str[str.length-el-1]
    })
    return reversed
    
}
console.log(palindrome('ama'));

module.exports = palindrome