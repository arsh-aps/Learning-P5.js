function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background('black');
  
  //smiley face when the cursor is in the left half
  if(mouseX < width/2){
    fill('#89ffcc')
    rect(0,0,width/2,height)
    stroke('black')
    strokeWeight(10)
    arc(width/2 , height * 0.75, 800, 250, PI/2, PI)  //arc for smile :)
    noStroke()
    arc(width/2, height/2, 250, 150, -PI/2, PI/2)  //arc for nose
    fill('black')
    circle(width/4, height/4, 150)  //black circle for eye
    fill('white')
    circle((width/4)+40, height/4, 50)  //white circle for eye ball
  }
  
  //sad face when the curson is in the right half
  else{
    fill('#183a23')
    rect(width/2,0,width/2,height)
    stroke('black')
    strokeWeight(10)
    arc(width/2 , height * 0.9, 800, 250, -PI/2, 0)  //arc for sadge :(
    noStroke()
    arc(width/2, height/2, 250, 150, PI/2, -PI/2)  //arc for nose
    fill('black')
    circle(width * 0.75, height/4, 150)  //black circle for eye
    fill('white')
    circle((width*0.75)-40, height/4, 50)  //white circle of eye ball
  }
}



