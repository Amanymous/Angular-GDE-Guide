class Car{
    constructor(make,model,year){
        this.make = make
        this.model = model
        this.year = year
    }

    startEngine(){
        console.log('Starting engine')
    }

    accelerate(){
        console.log('Accelerating');
    }

    brake(){
        console.log("Braking");
    }
}

const myCar = new Car('Toyota',"Camry",2023)
console.log(myCar.startEngine());