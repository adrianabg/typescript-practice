var car;
function createCar(plate, brand, color) {
    return new Car(plate, color, brand);
}
function submitCar() {
    var platebox = document.getElementById("plate").value;
    var brandbox = document.getElementById("brand").value;
    var colorbox = document.getElementById("color").value;
    var plateValidation = (/^[0-9]{4}[a-zA-Z]{3}$/.test(platebox));
    if (!plateValidation) {
        alert("The plate is not correct, introduce 4 numbers and 3 letters.");
        return false;
    }
    else if (brandbox == "" || colorbox == "") {
        alert("Please complete all the fields.");
    }
    else {
        car = createCar(platebox, brandbox, colorbox);
        showCar();
        showWheelForm();
    }
}
function showCar() {
    var carinfo = document.getElementById("carInfo");
    carinfo.innerText = "Plate number: " + car.plate + " " + "Color: " + car.color + " " + " Brand: " + car.brand;
}
function showWheelForm() {
    document.getElementById("carForm").style.display = "none";
    document.getElementById("wheelForm").style.display = "block";
    document.getElementById("titleInfo").style.display = "block";
}
function createWheel(diameter, brand) {
    car.addWheel(new Wheel(diameter, brand));
}
function submitWheels() {
    //Marca de les rodes
    var brandWheel1 = document.getElementById("brandWheel1").value;
    var brandWheel2 = document.getElementById("brandWheel2").value;
    var brandWheel3 = document.getElementById("brandWheel3").value;
    var brandWheel4 = document.getElementById("brandWheel4").value;
    //var result = testDiameter(diameter);
    /*
        if(result == true){
            addWheel(diameter, brand);
        }*/
    /*
    if(diam_wheel1 < 0.4 && diam_wheel1 > 2){
        alert("Introduce correct diameter values.");
        return false;
    }else{
        createWheel(diam_wheel1, brandWheel1);
        createWheel(diam_wheel2, brandWheel2);
        createWheel(diam_wheel3, brandWheel3);
        createWheel(diam_wheel4, brandWheel4);
    }*/
    console.log(car);
}
function testDiameter(diameter) {
    if (diameter < 0.4 && diameter > 2) {
        return false;
    }
    else {
        return true;
    }
}
function validateWheels() {
    // Diàmetre de les rodes
    var diam_wheel1 = Number(document.getElementById("wheel1").value);
    var diam_wheel2 = Number(document.getElementById("wheel2").value);
    var diam_wheel3 = Number(document.getElementById("wheel3").value);
    var diam_wheel4 = Number(document.getElementById("wheel4").value);
    var result = testDiameter();
    if (diam)
        ;
}
function showWheels() {
    //Info des les rodes que es mostrarà per pantalla. WheelsInfo son els paragrafs html.
    var wheelsInfo1 = document.getElementById("wheelsInfo1");
    var wheelsInfo2 = document.getElementById("wheelsInfo2");
    var wheelsInfo3 = document.getElementById("wheelsInfo3");
    var wheelsInfo4 = document.getElementById("wheelsInfo4");
    wheelsInfo1.innerText = "1st wheel: " + diam_wheel1 + ", " + brandWheel1 + ". ";
    wheelsInfo2.innerText = "2nd wheel: " + diam_wheel2 + ", " + brandWheel2 + ". ";
    wheelsInfo3.innerText = "3rd wheel: " + diam_wheel3 + ", " + brandWheel3 + ". ";
    wheelsInfo4.innerText = "4th wheel: " + diam_wheel4 + ", " + brandWheel4 + ". ";
    //m'ho detecta com un objecte.
}
/*

function validWheel(diameter: number){
    alert("validació rodes");
    if(diameter < 0.4 && diameter > 2){
        alert("Introduce correct diameter size.");
        return false;
    }else{
        return true;
    }
}
*/
//VALIDACIÓ EM DÓNA ERROR
//fer bé la validació i ocultar els formularis quan s'està executant un altre. vinculacio!!!
