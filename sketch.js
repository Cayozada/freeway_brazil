function setup() {
  createCanvas(500, 400);
  soundtrackMain.loop();
}

function draw() {
  background(sceneryImage);
  showMc();
  showCar();
  movesetCar();
  movesetMc();
  bounceBackCar();
  colisionMc();
  scoreboard();
  scoring();
}