console.log("Static properties and methods - Object oriented programming in Javascript");

class Config{
    static dbuser = "username"
    static dbPassword = "secret"
    static apiToken = "abcd"
}

// console.log(Config.apiToken)

class User{
    static cache = {
        1: 'some value'
    }

    constructor(name,age,income){
        this.name = name
        this.age = age 
        this.income = income
        this.id = User.id++
    }

    static{
        console.log('initialized');
    }

    static hasInCache(){
        console.log(User.cache);
    }

    static compareByAge(user1,user2){
        return user1.age - user2.age
    }

    static compareByIncome(user1,user2){
        return user1.age - user2.age
    }

}
// console.log(User.cache);
User.hasInCache()
const user1 = new User("Aman",22,100000000,1)
const user2 = new User("John",22,100000000,1)
// console.log(user1,user2);

const myOriginal = {
    someProp: "with a string value",
    anotherProp: {
        withAnotherProp: 1,
        andAnotherProp: true
    }
};
  
const myShallowCopy = {...myOriginal};
const deepCopy = JSON.parse(JSON.stringify(myOriginal))
console.log("Shallow Copy:",myShallowCopy);
console.log("Deep Copy:",deepCopy);