function setup(){
  createCanvas(1200, 800, WEBGL);
}

function draw(){
  background(350);
  
  
  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cylinder(200, 20);
  pop();

  translate(24, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(200, 200);
  pop();
  
  
}
