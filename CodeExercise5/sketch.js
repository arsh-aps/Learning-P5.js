function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background('grey');
  stroke('black')
  strokeWeight(2)
  noFill()
  
  translate(width/2, height/2)
  
  
  for(let i = 0; i < 12; i++){
    let angle = map(i, 0, 12, 0, 360) 
    for(let j = 0; j < 12; j++){
      push()
      rotate(angle)
      let denom = map(j, 0, 11, 2, 9)
      translate(width/denom, 0)
      circle(0,0,200)
      pop()
    }
  }
  strokeWeight(400)
  circle(0,0, width)
  
  
}