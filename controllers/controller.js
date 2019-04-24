function createCar(plate, brand, color) {
    return new Car(plate, color, brand);
}
function submitCar() {
    var platebox = document.getElementById("plate").value;
    var brandbox = document.getElementById("brand").value;
    var colorbox = document.getElementById("color").value;
    var carinfo = document.getElementById("carInfo");
    var result = validCar(platebox, brandbox, colorbox);
    if (result == true) {
        createCar(platebox, brandbox, colorbox);
    }
    carinfo.innerText = "Plate number: " + platebox + " " + "Color: " + colorbox + " " + " Brand: " + brandbox;
}
function validCar(platebox, brandbox, colorbox) {
    var plateValidation = (/^A-Za-z{3}0-9{4}/.test(platebox));
    var brandValidation = (/^[a-z]+$/.test(brandbox));
    var colorValidation = (/^[a-z]+$/.test(colorbox));
    if (!plateValidation && !brandValidation && !colorValidation) {
        alert("Your car information is not correct. Follow the given example.");
        return false;
    }
    else if (platebox == "" || brandbox == "" || colorbox == "") {
        alert("Please fill all the fields.");
        return false;
    }
    else {
        return true;
    }
}
// ***** DETECTA LA 1a CONDICIÓ DEL IF PERÒ DESPRÉS DÓNA TRUE I NO VALIDA
function createWheel(diameter, brand) {
    car.addWheel(new Wheel(diameter, brand));
}
// **** AIXÒ NO SÉ SI ESTÀ BEN ESTRUCTURAT, HE COPIAT EL FORMAT DEL "CREATECAR" - "car" surt com un error que no troba 
function submitWheels() {
    // Diàmetre de les rodes
    var wheel1 = document.getElementById("wheel1").value;
    var wheel2 = document.getElementById("wheel2").value;
    var wheel3 = document.getElementById("wheel3").value;
    var wheel4 = document.getElementById("wheel4").value;
    //Marca de les rodes
    var brandWheel1 = document.getElementById("brandWheel1");
    var brandWheel2 = document.getElementById("brandWheel2");
    var brandWheel3 = document.getElementById("brandWheel3");
    var brandWheel4 = document.getElementById("brandWheel4");
    //Info des les rodes que es mostrarà per pantalla
    var wheelsInfo1 = document.getElementById("wheelsInfo1");
    var wheelsInfo2 = document.getElementById("wheelsInfo2");
    var wheelsInfo3 = document.getElementById("wheelsInfo3");
    var wheelsInfo4 = document.getElementById("wheelsInfo4");
    wheelsInfo1.innerText = "1st wheel: " + wheel1 + ", " + brandWheel1 + ". ";
    wheelsInfo2.innerText = "2nd wheel: " + wheel2 + ", " + brandWheel2 + ". ";
    wheelsInfo3.innerText = "3rd wheel: " + wheel3 + ", " + brandWheel3 + ". ";
    wheelsInfo4.innerText = "4th wheel: " + wheel4 + ", " + brandWheel4 + ". ";
    var resultWheels = validWheel(); //S'ha de posar algun parametre?
    if (resultWheels == true) {
        createWheel(diameter, brand);
    }
    //m'ho detecta com un objecte.
}
// **** MASSES VARIABLES??
function validWheel() {
    alert("validació rodes");
    // var diameterValidation1 = (/^A-Za-z{3}0-9{4}/.test(wheel1));
    // var diameterValidation2 = (/^A-Za-z{3}0-9{4}/.test(wheel2));
    // var diameterValidation3 = (/^A-Za-z{3}0-9{4}/.test(wheel3));
    // var diameterValidation4 = (/^A-Za-z{3}0-9{4}/.test(wheel4));
    //var brandWheelValidation = (/^[a-z]+$/.test(brandbox));
    var allWheels = [wheel1, wheel2, wheel3, wheel4];
    if (!allWheels > 0.4 && !allWheels < 2) {
        alert("Introduce the correct size.");
        return false;
    }
    else {
        return true;
    }
}
//VALIDACIÓ EM DÓNA ERROR
