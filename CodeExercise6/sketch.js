function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background('black');
  //loop runs 20 times to execute drawPattern function with random parameters
  for(let i = 0; i < 20; i++){
    let color = getRandomColor()
    let radius = random(width/12, width/3)
    drawPattern(color, radius)
  }
  noLoop()
}

//Takes random color and radius and generates 12 circles around the center.
function drawPattern(colorCircle, radius){
  push()
  translate(width/2, height/2)
  for(let i = 0; i < 12; i++){
    let angle = map(i, 0, 12, 0, 360)
    push()
    rotate(angle)
    translate(radius, 0)
    fill(colorCircle)
    circle(0, 0, 50)
    pop()
  }
  pop()
}

function getRandomColor() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  return color(r, g, b);
}