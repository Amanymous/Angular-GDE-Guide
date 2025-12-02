console.log("Classes - Object oriented programming in Javascript");

class BankAccount{

    customerName;
    accountNumber = Date.now()
    balance = 0

    constructor(customerName,balance=0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance
        
    }

    deposite(amount){
        this.balance += amount
    }

    withdraw(amount){
        this.balance -= amount
    }
}
const amanAccount = new BankAccount('Aman',1000)
// amanAccount.deposit(2000)
const johnAccount = new BankAccount("john")
johnAccount.deposite(10.01)
console.log(amanAccount,johnAccount);