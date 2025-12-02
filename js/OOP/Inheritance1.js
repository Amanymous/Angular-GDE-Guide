class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name," makes sound");
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.name = name
        this.breed = breed
    }
    bark(){
        console.log(this.name," barks loudly",this.breed);
    }
}

const myDog = new Dog("tommy","ronney","loony")
myDog.speak(); 
myDog.bark();