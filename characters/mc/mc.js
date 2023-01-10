//main character
let xmc = 85;
let ymc = 366;

//points
let mypoints = 0;

let hit = false;

function showMc() {
    image(mcImage, xmc, ymc, 30, 30);
}

function movesetMc() {
    if (keyIsDown(UP_ARROW)) {
        ymc -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if(mcCanMove()){
            ymc += 3;
        }
    }
}

function colisionMc(){
    for(let i = 0; i < carsImages.length; i ++){
        hit = collideRectCircle(xcs[i], ycs[i], cc, wc, xmc, ymc, 15);
        if(hit){
            collideMcBounce();
            fxColision.play();
            if(biggerThanZero()){
                mypoints -= 1; 
            }
        }
    }
}

function collideMcBounce(){
    ymc = 366;
}

function scoreboard(){
    textAlign(CENTER);
    textSize(25);
    fill(color(0,128,0));
    text(mypoints, width / 5, 25);
}

function scoring(){
    if(ymc < 15){
        mypoints += 1;
        fxPoint.play();
        collideMcBounce();
    }
}

function biggerThanZero(){
    return mypoints > 0;
}

function mcCanMove(){
    return ymc < 366;
}
