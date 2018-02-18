function setup(){
  createCanvas(1024, 900, WEBGL);

}

function draw(){
  background(650);

    orbitControl();

  /*
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;
  */

  rotateY(frameCount * 0.003);

  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 80; i++){
      translate(sin(frameCount * 0.01 + j) * 70, sin(frameCount * 0.1 + j) / 0.100, i * 0.1);
      //translate(sin(frameCount * 0.01 + j) * 10, sin(frameCount * 0.001 + j) * 100, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      normalMaterial();
      //sphere(20, 24, 16);
      ellipsoid(20, 30, 40);
      //box(200, 200, 200);
      pop();
    }
    pop();
  }
}


/*
function draw(){
  background(250);
  var radius = width * 1.5;

  //drag to move the world.
  orbitControl();
  normalMaterial();
  translate(0, 0, -600);
  for(var i = 0; i <= 12; i++){
    for(var j = 0; j <= 12; j++){
      push();
      var a = j/12 * PI;
      var b = i/12 * PI;
      translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2 , cos(2 * a) * radius * sin(b));
      if(j%2 === 0){
        cone(30, 30);
      }else{
        box(30, 30, 30);
      }
      pop();
    }
  }
}
*/




///////////////////

/*
var img;
function setup(){
  createCanvas(710, 400, WEBGL);
  img = loadImage("assets/cat.jpg");
}
function draw(){
  background(0);
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;
  ambientLight(100, 80, 80);
  pointLight(200, 200, 200, locX, locY, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  texture(img);
  box(80);
  pop();

  translate(-200, -250, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  fill(250, 0, 0);
  torus(80, 20, 64, 64);
  pop();
  translate(400, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  normalMaterial();
  torus(80, 20, 64, 64);
  pop();
  translate(-400, 500, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  ambientMaterial(250);
  torus(80, 20, 64, 64);
  pop();
  translate(400, 0, 0);
  push();
  specularMaterial(250);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  torus(80, 20, 64, 64);
  pop();
}
*/
