let money = 100;
let totalApple = 0;

function buyApple(x) {
if (x > 0) {
    totalApple++;
    console.warn("I have", x, "RS", totalApple);

    buyMore(x);
} else {
    console.warn("I don't have more money", totalApple);
}
}
function buyMore(x) {

buyApple(x - 10);
}

console.log(buyApple(money))