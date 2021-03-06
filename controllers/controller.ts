let car: Car;

function createCar(plate:string, brand:string, color:string){
    return new Car(plate, color, brand);
}

//En prémer el botó "Create car" crea el cotxe, mostra els resultats i amaga carForm.   
function submitCar(){ 
    const platebox = (<HTMLInputElement>document.getElementById("plate")).value;
    const brandbox = (<HTMLInputElement>document.getElementById("brand")).value;
    const colorbox = (<HTMLInputElement>document.getElementById("color")).value;

    var plateValidation = (/^[0-9]{4}[a-zA-Z]{3}$/.test(platebox)); 
    if(!plateValidation){
        alert("The plate is not correct, introduce 4 numbers and 3 letters.");
        return false;
    }else if(brandbox == "" || colorbox == ""){
        alert("Please complete all the fields.")
    }else{
        car = createCar(platebox, brandbox, colorbox);
        showCar();
        showWheelForm();
    }
}

function showCar(){ 
    const carinfo = (<HTMLInputElement>document.getElementById("carInfo"));
    carinfo.innerText = "Plate number: " + car.plate + " " + "Color: " + car.color + " " + " Brand: " + car.brand;
}

function showWheelForm(){
    document.getElementById("carForm").style.display = "none";
    document.getElementById("wheelForm").style.display = "block";
    document.getElementById("titleInfo").style.display = "block";
}

//Condició general per validar el diàmetre de les rodes.
function testDiameter(diameter: number){
    if(diameter > 0.4 && diameter < 2){
        return true;
    }else{
        return false;
    }
}

function submitWheels(){    
    // Marca de les rodes
    var brandWheel1 = (<HTMLInputElement>document.getElementById("brandWheel1")).value;
    var brandWheel2 = (<HTMLInputElement>document.getElementById("brandWheel2")).value;
    var brandWheel3 = (<HTMLInputElement>document.getElementById("brandWheel3")).value;
    var brandWheel4 = (<HTMLInputElement>document.getElementById("brandWheel4")).value;

    // Diàmetre de les rodes
    var diam_wheel1 = Number((<HTMLInputElement>document.getElementById("wheel1")).value);
    var diam_wheel2 = Number((<HTMLInputElement>document.getElementById("wheel2")).value);
    var diam_wheel3 = Number((<HTMLInputElement>document.getElementById("wheel3")).value);
    var diam_wheel4 = Number((<HTMLInputElement>document.getElementById("wheel4")).value);

        if(!testDiameter(Number(diam_wheel1))){
            alert("The diameter of the 1st wheel is not correct!");
        }
        if(!testDiameter(Number(diam_wheel2))){
            alert("The diameter of the 2nd wheel is not correct!");
        }
        if(!testDiameter(Number(diam_wheel3))){
            alert("The diameter of the 3rd wheel is not correct!");
        }
        if(!testDiameter(Number(diam_wheel4))){
            alert("The diameter of the 4th wheel is not correct!");
        }

    var wheel1 = new Wheel(Number(diam_wheel1), (brandWheel1));
    var wheel2 = new Wheel(Number(diam_wheel2), (brandWheel2));
    var wheel3 = new Wheel(Number(diam_wheel3), (brandWheel3));
    var wheel4 = new Wheel(Number(diam_wheel4), (brandWheel4));

    car.addWheel(wheel1);
    car.addWheel(wheel2);
    car.addWheel(wheel3);
    car.addWheel(wheel4);

    showWheels();
    hideWheelsForm();
}

function showWheels(){
    //Info des les rodes que es mostrarà per pantalla. WheelsInfo son els paragrafs html.
    const wheelsInfo1 = (<HTMLInputElement>document.getElementById("wheelsInfo1"));
    const wheelsInfo2 = (<HTMLInputElement>document.getElementById("wheelsInfo2"));
    const wheelsInfo3 = (<HTMLInputElement>document.getElementById("wheelsInfo3"));
    const wheelsInfo4 = (<HTMLInputElement>document.getElementById("wheelsInfo4"));

    wheelsInfo1.innerText = "1st wheel: " + car.wheels[0].diameter + ", " + car.wheels[0].brand + ". ";
    wheelsInfo2.innerText = "2nd wheel: " + car.wheels[1].diameter + ", " + car.wheels[1].brand + ". ";
    wheelsInfo3.innerText = "3rd wheel: " + car.wheels[2].diameter + ", " + car.wheels[2].brand + ". ";
    wheelsInfo4.innerText = "4th wheel: " + car.wheels[3].diameter + ", " + car.wheels[3].brand + ". ";
}

function hideWheelsForm(){
    document.getElementById("wheelForm").style.display = "none";
}

/*
function createWheel(diameter: number, brand: string){
    car.addWheel(new Wheel(diameter,brand));
}
*/