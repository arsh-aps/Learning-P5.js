function setup() {
  createCanvas(800, 800);
  background('#000000');
  fill('#FFFFFF')
  textSize(20)
  text('An evil skull!', 50, 50, 200, 200)
}

function draw() {
  //ellipse for the head of the skull
  noStroke();
  fill('#FFFFFF');
  ellipse(400,200,550,350);
  
  //rectangle as the jaw
  noStroke();
  fill('#FFFFFF');
  rect(250,300,300,175);
  
  //two circles as the eyes
  fill('#000000');
  circle(300,200,100);
  circle(500,200,100);
  
  //a triangle as the nose
  fill('#000000');
  triangle(350, 325, 400, 275, 450, 325);
  
  //multiple lines as the teeth
  stroke('#000000');
  line(250, 425, 550, 425);
  line(300, 375, 300, 475);
  line(350, 375, 350, 475);
  line(400, 375, 400, 475);
  line(450, 375, 450, 475);
  line(500, 375, 500, 475);
  
  //experimenting
  /*noStroke();
  fill('#FFFFFF');
  translate(0, 0);
  rotate(0)
  rect(150, 550, 500, 100);
  translate(0, 0)*/
}
