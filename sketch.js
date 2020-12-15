var hour,minute,second;
var hourAngle,minuteAngle,secondAngle;

function setup() {
  createCanvas(800,800);
}

function draw() {
  background(0);  
  translate(400,400);
  rotate(-90);

  //get time
  Hour = hour();
  Minute = minute();
  Second = second();

  angleMode(DEGREES);

  secondAngle = map(Second,0,60,0,360);
  minuteAngle = map(Minute,0,60,0,360);
  hourAngle = map(Hour % 12,0,12,0,360);

  //create arcs
  noFill();
  strokeWeight(10);

  stroke(255,0,0);
  arc(0,0,500,500,0,secondAngle);

  stroke(0,255,0);
  arc(0,0,465,465,0,minuteAngle);

  stroke(135,206,235);
  arc(0,0,430,430,0,hourAngle);


  //create hands
  push();
  rotate(secondAngle);
  stroke(255,0,0);
  line(0,0,175,0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(0,255,0);
  line(0,0,125,0);
  pop();

  push();
  rotate(hourAngle);
  stroke(135,206,235);
  line(0,0,100,0);
  pop();


  drawSprites();
}