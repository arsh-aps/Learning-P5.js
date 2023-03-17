function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0);
  
  for(let i=0; i<50; i++){
    let x = map(i, 0, 49, 100, width-140);
    let y = map(i, 0, 49, 100, height-140);
    let invertY = map(i, 0, 49, height-140, 100);
    let c = random(360);
    //noStroke();
    fill(c, 255, 255, 1);
    rect(x, 100, 40, 40);
    rect(100, y, 40, 40);
    rect(x, height-140, 40, 40);
    rect(width-140, y, 40, 40);
    rect(x, y, 40, 40)
    rect(x, invertY, 40, 40);
  }
  //noLoop();
}
