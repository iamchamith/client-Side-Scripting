$(function () {

    ////create object from car class/ set values to constractor
    //var car1 = new car("Alto", "Suzuki", 2000);
    ////call to function through the object.
    //var tempSpeed = car1.getSpeed(10);
    //car1.toString(tempSpeed);


    ////create an object to van class
    //var van1 = new van("Tipper", "Tata", 100);
    ////call to function through the object.
    //var tempSpeed = van1.getSpeed(10);
    //van1.toString(tempSpeed);


    ////create an object to van class
    //jeep.brand("toyota");
    //jeep.model("hilux");
    //jeep.speed(20);
    //var speed = jeep.getSpeed(3);
    //jeep.toString(speed);

    //var jeep2 = new jeep();
    //jeep2.model = "asdf";
    //jeep2.brand = "asddddddf";
    //jeep2.speed = 123;
    //jeep2.getSpeed(4);
    //jeep2.toString();

    var single = moterBike();
    single.init("bajaj", "100", 110); // logs 'something private'
    console.log(single.toString(single.getSpeed(110))); // logs 'the public can see this!'
});
//create car class
function car(model, brand, speed) {
    this.model = model;
    this.brand = brand;
    this.speed = speed;

    this.toString = function (e) {
        console.log(this.brand + "-" + this.model + " car has " + e + " speed");
    }
    this.getSpeed = function (e) {
        return e * this.speed;
    }
}


//create class with naming property
var van = function (model, brand, speed) {
    this.model = model;
    this.brand = brand;
    this.speed = speed;

    this.toString = function (e) {
        console.log(this.brand + "-" + this.model + " van has " + e + " speed");
    }
    this.getSpeed = function (e) {
        return e * this.speed;
    }
}

//create a class with singleton designing patten
var jeep = {
    model: String,
    brand: String,
    speed: Number,
    toString: function (e) {
        console.log(this.brand() + "-" + this.model() + " jeep has " + e + " speed");
    },
    getSpeed: function (e) {
        return e * this.speed();
    }
}


// singleton method
var moterBike = function () {
    // here are our private methods and variables
    var model;
    var brand;
    var speed;

    function showPrivate() {
        console.log(privateVariable);
    }
    // public variables and methods (which can access
    // private variables and methods )
    return {
        init(_model,_brand,_speed){
            model = _model;
            brand = _brand;
            speed = _speed;
        },
        toString: function (e) {
            console.log(this.brand + "-" + this.model + " bike has " + e + " speed");
        },
        getSpeed: function (e) {
            return e * this.speed;
        }
    };
};


