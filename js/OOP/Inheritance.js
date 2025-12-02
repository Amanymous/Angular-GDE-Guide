console.log("Inheritance - Object oriented programming in Javascript");

function BankAccount(customerName, balance = 10) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.deposit = function (amount=1) {
    //     this.balance += amount;
    // };

    // this.withdraw = (amount) => {
    //     this.balance -= amount;
    // };
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
} 
BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}
const amanAccount = new BankAccount("Aman",13)
console.log(amanAccount);

function CurrentAccount(customerName, balance = 10) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    this.transactionLimit = 90000


    // this.deposit = function (amount=1) {
    //     this.balance += amount;
    // };

    // this.withdraw = (amount) => {
    //     this.balance -= amount;
    // };
}

CurrentAccount.prototype.deposit = function (amount=1) {
    this.balance += amount;
};
CurrentAccount.prototype.takeBusinessLoan = function (amount) {
    console.log("Take business Loan:",amount);
} 
CurrentAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}
const amanCurrentAccount = new CurrentAccount("Aman current account",13)
console.log("Current Account:",amanCurrentAccount);