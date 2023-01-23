//cars
let xcs = [600, 600, 600, 600, 600, 600];
let ycs = [40, 96, 150, 210, 270, 318];
let velc = [7, 6.6, 5, 5, 3.3, 2.3];
let cc = 50;
let wc = 40;

function showCar() {
    for(let i = 0; i < carsImages.length; i++){
        image(carsImages[i], xcs[i], ycs[i], cc, wc);
    }
}

function movesetCar() {
    for(let i = 0; i< carsImages.length; i++){
        xcs[i] -= velc[i];
    }
}

function bounceBackCar(){
    for(let i = 0; i< carsImages.length; i++){
        if(verifyPass(xcs[i])){
            xcs[i] = 600;
        }
    } 
}

function verifyPass(xcs){
    return xcs < -50;
}