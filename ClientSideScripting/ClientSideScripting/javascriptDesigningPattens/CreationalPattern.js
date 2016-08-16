$(function () {

    //create new object
    var car = {};

    //assign property for to the car object
    car.Brand = "Suzuki";
    car.Model = "Alto";
    car.Speed = function (e) { document.writeln(e * 10); }
    car.toString = function () { document.writeln(car.Brand + " / " + car.Model) }
   

    car.toString();
    car.Speed(20);
})