//game images
let sceneryImage;
let mcImage;
let carImage;
let carImageTwo;
let carImageThree;

//sounds
let soundtrackMain;
let fxColision;
let fxPoint;

function preload(){
    sceneryImage = loadImage("scenery/estrada.png");
    mcImage = loadImage("characters/mc/sprites/ator-1.png");
    carImage = loadImage("characters/cars/sprites/carro-1.png");
    carImageTwo = loadImage("characters/cars/sprites/carro-2.png");
    carImageThree = loadImage("characters/cars/sprites/carro-3.png");
    carsImages = [carImage, carImageTwo, carImageThree, carImage, carImageTwo, carImageThree];

    soundtrackMain = loadSound("fx/trilha.mp3");
    fxColision = loadSound("fx/colidiu.mp3");
    fxPoint = loadSound("fx/pontos.wav");
}

