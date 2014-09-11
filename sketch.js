function setup() {
  createCanvas(640, 480);
  background(128, 0, 65);
  noFill();

  stroke(255, 0, 0);

/*
  var x;

  x = 100;
  ellipse(x, 100, 50, 50);

  x = 250;
  ellipse(x, 100, 50, 50);

  x = 300;
  ellipse(x, 100, 50, 50);

*/

for (var x = 1; x <=10; x++)
{
  ellipse(x * 60, x * 20 + 80, x * 3, x * 10);
}
}