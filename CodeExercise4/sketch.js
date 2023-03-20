//Global Variables -------------------------------------------
let circles = [];
let boxes = [];
let n = 500;
let palette = ["#f08080","#f4978e","#f8ad9d","#fbc4ab","#ffdab9"]

//------------------------------------------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < n; i++){
    boxes[i] = {x : random(width), 
                y : random(height), 
                speedX : random(-1, 1), 
                speedY : random(-1, 1),
                color : random(palette)};
    
    circles[i] = {x : random(width), 
                  y : random(height), 
                  speedX : random(-1, 1),
                  speedY : random(-1, 1),
                  color : random(palette)};
  }
}


//------------------------------------------------------------
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


//------------------------------------------------------------
function draw() {
  background('black');
  
  for(let b of boxes){
    fill(b.color);
    rect(b.x, b.y, 40, 40, 5);
    b.x += b.speedX;
    b.y += b.speedY;
    
    if(b.x < 0 || (b.x + 40) > width ){
      b.speedX = -b.speedX;
    }
    if(b.y < 0 || (b.y + 40) > height){
      b.speedY = -b.speedY;
    }
  }
  
  for(let c of circles){
    fill(c.color);
    circle(c.x, c.y, 40);
    c.x += c.speedX;
    c.y += c.speedY;
    
    if(c.x < 0 || (c.x + 40) > width ){
      c.speedX = -c.speedX;
    }
    if(c.y < 0 || (c.y + 40) > height){
      c.speedY = -c.speedY;
    }
  }
}