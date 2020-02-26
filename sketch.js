function setup() {
  createCanvas(480, 600);
}


function draw() {

  print(pmouseX + ', ' + pmouseY);

  //background(204);
  //actual background
  //green rectangle
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      fill(0, 159, 144); // night grass
    }
  } else {
    fill(0, 235, 63);
  }
  strokeWeight(0);
  rect(0, 400, 480, 200);
  //blue rectangle
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      fill(3, 97, 131); //night ski
    }
  } else {
    fill(3, 215, 252);
  }
  strokeWeight(0);
  rect(0, 0, 480, 400);

  //stars
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      strokeWeight(5);
      stroke('white');

      point(random(0, 480), random(0, 400));
      point(random(0, 480), random(0, 400));
      point(random(0, 480), random(0, 400));
    }
  }


  //Roof
  fill(122, 113, 109);
  strokeWeight(0);
  beginShape();
  vertex(220, 60);
  vertex(180, 200);
  vertex(90, 300);
  vertex(375, 300);
  vertex(320, 150);
  endShape(CLOSE);

  //main house
  fill(191, 43, 6);
  strokeWeight(0);
  beginShape();
  vertex(120, 300);
  vertex(345, 300);
  vertex(330, 400);
  vertex(350, 500);
  vertex(115, 500);
  vertex(110, 400);
  endShape(CLOSE);

  //Door
  fill(140, 72, 0);
  beginShape();
  vertex(140, 500);
  vertex(190, 500);
  vertex(200, 420);
  vertex(180, 400);
  vertex(150, 400);
  vertex(130, 420);
  endShape(CLOSE);

  //door knob
  fill(227, 187, 7);
  ellipse(150, 440, 10, 10);

  //Round window
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      fill(252, 229, 72);
    }
  } else {
    fill(250, 250, 250);
  }
  strokeWeight(1);
  rotate(PI / 8);
  ellipse(400, 220, 50, 80);


  //inner frame of round window
  rotate(-PI / 8);
  line(291, 319, 291, 388);
  line(259, 360, 310, 360);
  stroke('black');
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      stroke('black');
      line(291, 319, 291, 388);
      line(259, 360, 310, 360);
    }
  }

}
