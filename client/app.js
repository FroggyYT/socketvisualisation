var s;
var mic;

function preload() {
  s = io();
}

var points = [];

function setup() {
  createCanvas(800, 800);
  background(0);
  mic = new p5.AudioIn();
  mic.start();

  s.on("mic", (mic) => {
    background(0);
    points.push(map(mic, 0, 1, -400, 400));
    if (points.length > 400) {
      points.splice(0, 1);
    }
    for (var i in points) {
      strokeWeight(3);
      stroke(255);
      line(i, points[i], i, points[i + 1]);
    }
  });
}

function draw() {
  s.emit("mic", mic.getLevel());
}
