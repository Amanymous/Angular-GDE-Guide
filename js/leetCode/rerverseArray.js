var reverse = function(x) {
    let rev = 0
    let pop;
    while(x!=0){

    pop = x%10
    x = x/10
    x = parseInt(x)
    rev = rev *10 + pop
    }
    if(rev > 0x7FFFFFFF) {
        return 0
    }
    if(rev < -0x7FFFFFFF) {
        return 0
    }
    return rev
};
reverse(123)